import Socials from "./Socials"

function Footer() {
  return (
    <footer className="grid grid-rows-4 md:grid-rows-2 md:grid-cols-2 md:divide-y xl:grid-cols-4 lg:grid-rows-1 divide-x divide-y divide-black border-t border-black *:px-12 *:py-12">
          {/* First */}
          <div className="text-pretty space-y-4">
            <p className="w-5/6 text-base">
              Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address
            </p>
            <input type="text" placeholder="Your Email" className="w-5/6 placeholder:text-xs focus:outline-none" />
            <button className="bg-black text-white w-5/6 py-3 text-xs">
              REMIND
            </button>
          </div>

          {/* Second */}
          <div className="space-y-3">
            <p className="text-defaultGrey text-lg font-medium">Contact Us</p>
            <div>
              <p className="text-defaultGrey text-xs">Address</p>
              <p className="font-medium">14/4 Xyz.</p>
            </div>
            <div>
              <p className="text-defaultGrey text-xs">Phone</p>
              <p className="font-medium">+0000000000</p>
            </div>
            <div>
              <p className="text-defaultGrey text-xs">General Enquiry:</p>
              <p className="font-medium">example@gmail.com</p>
            </div>
            <div>
              <p className="text-defaultGrey text-lg font-medium">Follow Us</p>
              <Socials/>
            </div>
          </div>

          {/* Third */}
          <div className="space-y-3">
            <p className="text-defaultGrey text-lg font-medium">Shop</p>
            <ul className="text-base font-medium">
              <li>All Products</li>
              <li>Fresh Flowers</li>
              <li>Dried Flowers</li>
              <li>Live Plants</li>
              <li>Designer Vases</li>
              <li>Aroma Candles</li>
              <li>Freshener Diffuser</li>
            </ul>
            <div>
              <p className="text-defaultGrey text-lg font-medium">Service</p>
              <ul className="font-medium">
                <li>Flower Subscription</li>
                <li>Wedding & Event Decor</li>
              </ul>
            </div>
          </div>

          {/* Fourth */}
          <div className="space-y-3">
            <p className="text-defaultGrey text-lg font-medium">About Us</p>
            <ul className="font-medium">
              <li>Our Story</li>
              <li>Blog</li>
              <li className="mt-6">Shipping & Returns</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </footer>
  )
}

export default Footer