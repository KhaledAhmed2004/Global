import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Lock, Mail } from "lucide-react";

export default function CheckoutModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [paymentEmail, setPaymentEmail] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit");

  const handlePayment = () => {
    console.log("Processing payment...", {
      email,
      paymentEmail,
      expiryDate,
      cvc,
      paymentMethod,
    });
    // Add your payment processing logic here
    alert("Payment processing...");
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[540px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Complete Your Purchase
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Review your order and enter payment details
          </p>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Order Summary */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
            <Card>
              <CardContent className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Standard Report</p>
                    <p className="text-sm text-muted-foreground">
                      VIN: 212311111111111
                    </p>
                  </div>
                  <p className="font-semibold">$34.99</p>
                </div>

                <div className="border-t pt-3 space-y-2">
                  <div className="flex justify-between">
                    <p className="text-sm">Subtotal</p>
                    <p className="text-sm font-medium">$34.99</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm">Tax</p>
                    <p className="text-sm font-medium">$0.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Secure Payment */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-semibold">Secure Payment</h3>
            </div>

            <Tabs
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="credit" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Credit Card
                </TabsTrigger>
                <TabsTrigger value="paypal" className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 00-.794.68l-.04.22-.63 3.993-.028.15a.805.805 0 01-.793.68H8.25c-.463 0-.817-.388-.724-.838l.062-.37.634-4.03.036-.197a.805.805 0 01.793-.681h.5c2.754 0 4.91-.927 5.544-3.61.265-1.124.134-2.066-.395-2.744-.2-.258-.456-.48-.764-.661a4.318 4.318 0 01.195-.992c.281-1.036.955-1.577 1.85-1.577h1.026c.742 0 1.33.601 1.33 1.346v.003c0 .14-.017.278-.05.412zM9.068 4.6c.157-.878.943-1.538 1.846-1.538h5.73c.678 0 1.312.13 1.866.374.77.34 1.333.906 1.628 1.64.314.781.338 1.716.072 2.72a4.318 4.318 0 00-.195.992c-.556-.18-1.157-.275-1.783-.275h-1.026c-.895 0-1.569.541-1.85 1.577-.635 2.684-2.79 3.611-5.544 3.611h-.5a.805.805 0 00-.794.681l-.036.197-.634 4.03-.062.37c-.093.45.261.838.724.838h2.818a.805.805 0 00.793-.68l.028-.15.63-3.993.04-.22a.805.805 0 01.794-.68h.5c3.238 0 5.774-1.314 6.514-5.12.256-1.313.192-2.447-.3-3.327a3.928 3.928 0 00-1.628-1.64c-.554-.243-1.188-.374-1.866-.374h-5.73c-.903 0-1.689.66-1.846 1.538L6.5 15.768l-.062.37c-.093.45.261.838.724.838h2.037l.634-4.03.036-.197z" />
                  </svg>
                  PayPal
                </TabsTrigger>
              </TabsList>

              <TabsContent value="credit" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="payment-email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="payment-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={paymentEmail}
                      onChange={(e) => setPaymentEmail(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      maxLength={5}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input
                      id="cvc"
                      placeholder="123"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      maxLength={4}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="paypal" className="mt-4">
                <div className="p-6 text-center border rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground">
                    You will be redirected to PayPal to complete your purchase
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button variant="outline" className="flex-1" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              className="flex-1 bg-purple-600 hover:bg-purple-700"
              onClick={handlePayment}
            >
              Pay $34.99
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
