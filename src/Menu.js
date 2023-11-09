import { useFlag } from '@unleash/proxy-client-react';


const TailWindCSSMenu = () => {
    const menuHoverStyle = 'md:p-4 py-2 block hover:text-purple-400';
    return (
    <div
    className="
        antialiased
        bg-gradient-to-r
        from-pink-300
        via-purple-300
        to-indigo-400
    "
  >
    <header>
    <nav
       className="
         flex flex-wrap
         items-center
         justify-between
         w-full
         py-4
         md:py-0
         px-4
         text-lg text-gray-700
         bg-white
       "
     >
      <div>
      <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
         <ul
           className="
             pt-4
             text-base text-gray-700
             md:flex
             md:justify-between 
             md:pt-0"
         >
           <li>
             <a className={menuHoverStyle} href="#">
                Features
            </a>
           </li>
           <li>
             <a className={menuHoverStyle} href="#">
                Pricing
            </a>
           </li>
           <li>
             <a className={menuHoverStyle} href="#">
                Customers
            </a>
           </li>
           <li>
             <a className={menuHoverStyle} href="#">
                Blog
            </a>
           </li>
           <li>
             <a
               className={menuHoverStyle}
               href="#">
                Sign Up
            </a>
           </li>
         </ul>
       </div>
       </div>
   </nav>
 </header>
 
 
 <div className="px-4">
     <div
       className="
         flex
         justify-center
         items-center
         bg-white
         mx-auto
         max-w-2xl
         rounded-lg
         my-16
         p-16
       "
     >
       <h1 className="text-2xl font-medium">Navbar with TailwindCSS</h1>
     </div>
   </div>
   </div>
   )
};

const BarebonesNav = () => {
    return (
        <div>
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Customers</li>
                <li>Blog</li>
                <li>Sign Up</li>
            </ul>
        </div>
    )
}

const Bookmarks = () => {
  const enabled = useFlag('ReactCaseFlag');

  return enabled ? <TailWindCSSMenu /> : <BarebonesNav />;

};

export default Bookmarks;