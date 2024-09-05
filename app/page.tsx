import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, Search, ShoppingCart, User, Menu } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-4 lg:px-40 py-4 lg:py-8 border-b border-[#E5E5E5]">
        <Image src={"/Logo.svg"} alt="logo" width={65.4} height={22.87} />
        <div className="hidden lg:flex items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              className="pl-10 pr-4 py-2 w-[400px] h-[56px] bg-[#F5F5F5] border-none"
              placeholder="Search"
            />
          </div>
        </div>
        <nav className="hidden lg:flex items-center space-x-6">
          <Button variant="link" className="text-black">
            Home
          </Button>
          <Button variant="link" className="text-gray-500">
            About
          </Button>
          <Button variant="link" className="text-gray-500">
            Contact Us
          </Button>
          <Button variant="link" className="text-gray-500">
            Blog
          </Button>
        </nav>
        <div className="hidden lg:flex items-center gap-6">
          <Heart className="w-6 h-6 stroke-1" />
          <ShoppingCart className="w-6 h-6 stroke-1" />
          <User className="w-6 h-6 stroke-1" />
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="w-full flex flex-col px-4 sm:px-40 py-8">
        {/* Steps */}
        <div className="py-8 sm:py-16 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Image
              src={"/Location.svg"}
              alt="location"
              width={24}
              height={24}
              className="hidden sm:block"
            />
            <div>
              <p className="text-[#B2B2B2] text-xs sm:text-sm font-medium">
                Step 1
              </p>
              <p className="text-[#B2B2B2] text-sm sm:text-xl font-medium">
                Address
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src={"/Shipping.svg"}
              alt="shipping"
              width={24}
              height={24}
              className="hidden sm:block"
            />
            <div>
              <p className="text-[#B2B2B2] text-xs sm:text-sm font-medium">
                Step 2
              </p>
              <p className="text-[#B2B2B2] text-sm sm:text-xl font-medium">
                Shipping
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src={"/Payment.svg"}
              alt="payment"
              width={24}
              height={24}
              className="hidden sm:block"
            />
            <div>
              <p className="text-xs sm:text-sm font-medium">Step 3</p>
              <p className="text-sm sm:text-xl font-medium">Payment</p>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="flex flex-col  sm:grid sm:grid-cols-2 gap-8">
          {/* Summary Card */}
          <Card className="w-full order-2 sm:order-1">
            <CardHeader>
              <CardTitle className="font-medium">Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-[#F6F6F6] flex items-center justify-between rounded-md">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/ProductImage1.svg"}
                    alt="product-1"
                    width={40}
                    height={40}
                  />
                  <p className="font-medium">Apple iPhone 14 Pro Max 128Gb</p>
                </div>
                <p className="font-bold">$1399</p>
              </div>
              <div className="p-4 bg-[#F6F6F6] flex items-center justify-between rounded-md">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/ProductImage2.svg"}
                    alt="product-2"
                    width={40}
                    height={40}
                  />
                  <p className="font-medium">AirPods Max Silver</p>
                </div>
                <p className="font-bold">$549</p>
              </div>
              <div className="p-4 bg-[#F6F6F6] flex items-center justify-between rounded-md">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/ProductImage3.svg"}
                    alt="product-3"
                    width={40}
                    height={40}
                  />
                  <p className="font-medium">Apple Watch Series 9 GPS 41mm</p>
                </div>
                <p className="font-bold">$399</p>
              </div>
              <p className="font-medium text-sm text-[#545454]">Address</p>
              <p>1131 Dusty Townline, Jacksonville, TX 40322</p>
              <p className="font-medium text-sm text-[#545454]">
                Shipment method
              </p>
              <p>Free</p>
              <div className="flex items-center justify-between">
                <p className="font-medium">Subtotal</p>
                <p className="font-medium">$2347</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium text-[#545454]">Tax</p>
                <p className="font-medium">$50</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium text-[#545454]">
                  Estimated shipping & Handling
                </p>
                <p className="font-medium">$29</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium">Total</p>
                <p className="font-bold">$2426</p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <div className="w-full flex flex-col gap-4 order-1 sm:order-2">
            <h1 className="font-bold text-xl">Payment</h1>
            <div className="flex items-center justify-between">
              <Button className="font-medium text-sm" variant={"link"}>
                Credit Card
              </Button>
              <Button className="font-medium text-sm" variant={"link"}>
                PayPal
              </Button>
              <Button className="font-medium text-sm" variant={"link"}>
                PayPal Credit
              </Button>
            </div>
            <Image
              src={"/image 65.svg"}
              alt="card"
              width={337}
              height={190}
              className="w-full h-auto"
            />
            <Input
              className="w-full text-[#979797] placeholder:text-[#979797] h-12 border-[0.5px] border-[#CECECE] text-sm"
              placeholder="Cardholder Name"
            />
            <Input
              className="w-full text-[#979797] placeholder:text-[#979797] h-12 border-[0.5px] border-[#CECECE] text-sm"
              placeholder="Card Number"
            />
            <div className="flex items-center justify-between gap-4">
              <Input
                className="w-full text-[#979797] placeholder:text-[#979797] h-12 border-[0.5px] border-[#CECECE] text-sm"
                placeholder="Exp. Date"
              />
              <Input
                className="w-full text-[#979797] placeholder:text-[#979797] h-12 border-[0.5px] border-[#CECECE] text-sm"
                placeholder="CVV"
              />
            </div>
            <div className="flex items-center space-x-2 py-6">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-6"
              >
                Same as billing address
              </label>
            </div>
            <div className="flex items-center justify-between gap-4">
              <Button
                className="font-medium w-full h-16 border-2 border-black"
                variant={"outline"}
              >
                Back
              </Button>
              <Button
                className="font-medium bg-black text-white w-full h-16"
                variant={"default"}
              >
                Pay
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center justify-center sm:justify-start sm:items-start px-4 sm:px-40 py-12 sm:py-28 bg-[#000000] text-white">
        <div className="sm:grid flex flex-col items-center justify-center sm:grid-cols-3 gap-8 sm:gap-28 sm:place-items-start">
          <div className="sm:flex sm:flex-col sm:justify-start sm:items-start flex flex-col items-center justify-center gap-2">
            <Image
              src={"/White-Logo.svg"}
              alt="white-logo"
              width={65.4}
              height={22.87}
            />
            <p className="font-medium text-sm text-center sm:text-start leading-6 text-[#CFCFCF]">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
          <div className="sm:flex sm:flex-col sm:justify-start sm:items-start flex flex-col items-center justify-center gap-2">
            <p className="font-semibold">Services</p>
            <p className="text-sm text-[#CFCFCF]">Bonus program</p>
            <p className="text-sm text-[#CFCFCF]">Gift cards</p>
            <p className="text-sm text-[#CFCFCF]">Credit and payment</p>
            <p className="text-sm text-[#CFCFCF]">Service contracts</p>
            <p className="text-sm text-[#CFCFCF]">Non-cash account</p>
            <p className="text-sm text-[#CFCFCF]">Payment</p>
          </div>
          <div className="sm:flex sm:flex-col sm:justify-start sm:items-start flex flex-col items-center justify-center gap-2">
            <p className="font-semibold">Assistance to the buyer</p>
            <p className="text-sm text-[#CFCFCF]">Find an order</p>
            <p className="text-sm text-[#CFCFCF]">Terms of delivery</p>
            <p className="text-sm text-[#CFCFCF]">
              Exchange and return of goods
            </p>
            <p className="text-sm text-[#CFCFCF]">Guarantee</p>
            <p className="text-sm text-[#CFCFCF]">Frequently asked questions</p>
            <p className="text-sm text-[#CFCFCF]">Terms of use of the site</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-8">
          <Image src={"/Twitter.svg"} alt="twitter" width={16} height={16} />
          <Image src={"/Facebook.svg"} alt="facebook" width={16} height={16} />
          <Image src={"/Tiktok.svg"} alt="tiktok" width={16} height={16} />
          <Image
            src={"/Instagram.svg"}
            alt="instagram"
            width={16}
            height={16}
          />
        </div>
      </footer>
    </div>
  );
}
