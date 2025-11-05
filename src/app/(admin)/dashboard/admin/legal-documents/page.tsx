'use client'
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  FileText, 
  Edit, 
  Eye, 
  Save, 
  Copy,
  Download,
  Upload,
  X,
  Globe,
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Undo,
  Redo
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Toggle } from '@/components/ui/toggle';
import { ScrollArea } from '@/components/ui/scroll-area';

const documentsData = {
  terms: {
    title: 'Terms and Conditions',
    lastUpdated: '2024-11-05',
    status: 'published',
    content: `<h2>Terms and Conditions</h2>
<p>Last Updated: November 5, 2024</p>

<h3>1. Acceptance of Terms</h3>
<p>By accessing and using the Global VIN service, you accept and agree to be bound by the terms and provision of this agreement.</p>

<h3>2. Use License</h3>
<p>Permission is granted to temporarily access the materials (information or software) on Global VIN's service for personal, non-commercial transitory viewing only.</p>

<h3>3. Disclaimer</h3>
<p>The materials on Global VIN's service are provided on an 'as is' basis. Global VIN makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>

<h3>4. Limitations</h3>
<p>In no event shall Global VIN or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Global VIN's service.</p>

<h3>5. API Usage Terms</h3>
<p>Partners are granted access to our API services subject to fair use policies and rate limiting. Abuse of API services may result in suspension of access.</p>

<h3>6. Data Privacy</h3>
<p>We are committed to protecting your privacy. All customer data is handled in accordance with applicable data protection regulations including GDPR and CCPA.</p>

<h3>7. Payment Terms</h3>
<p>All fees are payable in accordance with the pricing packages selected. Refunds are subject to our refund policy.</p>

<h3>8. Termination</h3>
<p>We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever.</p>

<h3>9. Governing Law</h3>
<p>These terms shall be governed and construed in accordance with the laws of the jurisdiction in which the company operates.</p>

<h3>10. Changes to Terms</h3>
<p>We reserve the right to modify or replace these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>`
  },
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: '2024-11-05',
    status: 'published',
    content: `<h2>Privacy Policy</h2>
<p>Last Updated: November 5, 2024</p>

<h3>1. Information We Collect</h3>
<p>We collect information that you provide directly to us, including name, email address, company information, and VIN data you submit for processing.</p>

<h3>2. How We Use Your Information</h3>
<p>We use the information we collect to provide, maintain, and improve our services, process transactions, and send you technical notices and support messages.</p>

<h3>3. Information Sharing</h3>
<p>We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our platform.</p>

<h3>4. Data Security</h3>
<p>We implement industry-standard security measures to protect your information. However, no method of transmission over the Internet is 100% secure.</p>

<h3>5. Your Rights</h3>
<p>You have the right to access, update, or delete your personal information. Contact us to exercise these rights.</p>

<h3>6. Cookies</h3>
<p>We use cookies and similar tracking technologies to track activity on our service and hold certain information.</p>

<h3>7. Third-Party Services</h3>
<p>Our service may contain links to third-party websites. We are not responsible for their privacy practices.</p>

<h3>8. Children's Privacy</h3>
<p>Our service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>

<h3>9. Changes to This Policy</h3>
<p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>`
  },
  refund: {
    title: 'Refund Policy',
    lastUpdated: '2024-11-05',
    status: 'published',
    content: `<h2>Refund Policy</h2>
<p>Last Updated: November 5, 2024</p>

<h3>1. Refund Eligibility</h3>
<p>We offer refunds within 30 days of purchase for unused services. Refund requests must be submitted through our support portal.</p>

<h3>2. Non-Refundable Items</h3>
<p>API usage fees, custom development work, and services already rendered are non-refundable.</p>

<h3>3. Refund Process</h3>
<p>Refunds will be processed within 5-10 business days and will be credited to the original payment method.</p>

<h3>4. Cancellation</h3>
<p>You may cancel your subscription at any time. The cancellation will take effect at the end of the current billing period.</p>

<h3>5. Disputes</h3>
<p>If you have any disputes regarding charges, please contact our support team before initiating a chargeback.</p>`
  },
  cookie: {
    title: 'Cookie Policy',
    lastUpdated: '2024-11-05',
    status: 'published',
    content: `<h2>Cookie Policy</h2>
<p>Last Updated: November 5, 2024</p>

<h3>1. What Are Cookies</h3>
<p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience.</p>

<h3>2. How We Use Cookies</h3>
<p>We use cookies to remember your preferences, analyze site traffic, and personalize content and advertisements.</p>

<h3>3. Types of Cookies</h3>
<p>We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device).</p>

<h3>4. Third-Party Cookies</h3>
<p>We may use third-party services that also use cookies, such as analytics and advertising services.</p>

<h3>5. Managing Cookies</h3>
<p>You can control and manage cookies through your browser settings. Disabling cookies may affect the functionality of our service.</p>`
  }
};

type DocumentType = 'terms' | 'privacy' | 'refund' | 'cookie';

// Tiptap Editor Component (inline)
function TiptapEditor({ content, onChange }: { content: string; onChange: (html: string) => void }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3],
        },
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose max-w-none focus:outline-none min-h-[500px] p-4',
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="border rounded-lg">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b bg-gray-50">
        <Toggle
          size="sm"
          pressed={editor.isActive('heading', { level: 2 })}
          onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          <Heading2 className="w-4 h-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('bold')}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="w-4 h-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('italic')}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="w-4 h-4" />
        </Toggle>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <Toggle
          size="sm"
          pressed={editor.isActive('bulletList')}
          onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className="w-4 h-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('orderedList')}
          onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered className="w-4 h-4" />
        </Toggle>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          <Undo className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          <Redo className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Editor Content */}
      <EditorContent editor={editor} />
      
      {/* Custom Styles */}
      <style>{`
        .ProseMirror {
          min-height: 500px;
        }
        .ProseMirror h2 {
          font-size: 1.5em;
          font-weight: 600;
          margin-top: 1em;
          margin-bottom: 0.5em;
        }
        .ProseMirror h3 {
          font-size: 1.25em;
          font-weight: 600;
          margin-top: 1em;
          margin-bottom: 0.5em;
        }
        .ProseMirror p {
          margin-bottom: 0.75em;
        }
        .ProseMirror ul,
        .ProseMirror ol {
          padding-left: 1.5em;
          margin-bottom: 0.75em;
        }
        .ProseMirror li {
          margin-bottom: 0.25em;
        }
      `}</style>
    </div>
  );
}

export default function TermsConditions() {
  const [selectedDocument, setSelectedDocument] = useState<DocumentType>('terms');
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(documentsData[selectedDocument].content);
  const [editTitle, setEditTitle] = useState(documentsData[selectedDocument].title);

  const currentDoc = documentsData[selectedDocument];

  const handleDocumentChange = (value: DocumentType) => {
    setSelectedDocument(value);
    setEditContent(documentsData[value].content);
    setEditTitle(documentsData[value].title);
    setIsEditing(false);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  const handleCancel = () => {
    setEditContent(currentDoc.content);
    setEditTitle(currentDoc.title);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl">Legal Documents</h1>
          <p className="text-gray-500 mt-1">Manage your terms, policies, and legal content</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Globe className="w-4 h-4" />
            View Live Site
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl">{Object.keys(documentsData).length}</p>
                <p className="text-sm text-gray-500">Total Documents</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl">
                  <Badge variant="default">{currentDoc.status}</Badge>
                </p>
                <p className="text-sm text-gray-500">Current Status</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Last Updated</p>
                <p className="text-sm">{currentDoc.lastUpdated}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                <Edit className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Active Document</p>
                <p className="text-sm">{currentDoc.title}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Editor */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Document Editor</CardTitle>
              <CardDescription>Create and edit your legal documents</CardDescription>
            </div>
            <Select value={selectedDocument} onValueChange={(value) => handleDocumentChange(value as DocumentType)}>
              <SelectTrigger className="w-64">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="terms">Terms & Conditions</SelectItem>
                <SelectItem value="privacy">Privacy Policy</SelectItem>
                <SelectItem value="refund">Refund Policy</SelectItem>
                <SelectItem value="cookie">Cookie Policy</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Document Info */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm text-gray-500">Document</p>
              <p>{currentDoc.title}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Updated</p>
              <p className="text-sm">{currentDoc.lastUpdated}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <Badge variant="default">{currentDoc.status}</Badge>
            </div>
          </div>

          {/* Editor Actions */}
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex gap-2">
              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)} className="gap-2">
                  <Edit className="w-4 h-4" />
                  Edit Document
                </Button>
              ) : (
                <>
                  <Button onClick={handleSave} className="gap-2">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={handleCancel}>
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </>
              )}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Eye className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Download className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Copy className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Upload className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Content Editor */}
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <Label>Document Title</Label>
                <Input 
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
              </div>
              <div>
                <Label className="mb-2 block">Content</Label>
                <TiptapEditor
                  content={editContent}
                  onChange={setEditContent}
                />
              </div>
            </div>
          ) : (
            <ScrollArea className="h-[500px] border rounded-lg p-6">
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: currentDoc.content }}
              />
            </ScrollArea>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
