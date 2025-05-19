import Image from "next/image";
import LogoImage from '@/assets/images/logo.svg';


const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center  md: justify-center gap-6" >
                    <div>
                    <span className="ml-2 md:ml-4 text-[#D3D3D3] font-bold text-xl md:text-2xl">Clarity</span>
                    </div>

                    <div>
                     <nav className="flex gap-6">
                        {footerLinks.map ((link) => (
                            <a href={link.href}
                            className="text-white/50 text-sm"
                            >{ link.label}</a>
                        )
                        )}
                     </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
