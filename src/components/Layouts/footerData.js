import { BiPhoneCall, BiMap, BiMailSend } from "react-icons/bi"
import { AiOutlineClockCircle } from "react-icons/ai"

const footerBox1 = {
    title: "CUSTOMER SERVICE",
    content: [
        {
            icon: "",
            text: "Contact us"
        },
        {
            icon: "",
            text: "Help and advice"
        },
        {
            icon: "",
            text: "Shipping & Returns"
        },
        {
            icon: "",
            text: "Terms and conditions"
        },
        {
            icon: "",
            text: "Refund Policy"
        }
    ]
}
const footerBox2 = {
    title: "INFORMATION",
    content: [
        {
            icon: "",
            text: "About Us"
        },
        {
            icon: "",
            text: "Testimonials"
        },
        {
            icon: "",
            text: "My Account"
        },
        {
            icon: "",
            text: "Payments & Returns"
        },
        {
            icon: "",
            text: "View Catalogues Online"
        }
    ]
}
const footerBox3 = {
    title: "About Us",
    content: [
        {
            icon: "",
            text: "Who We Are ?"
        },
        {
            icon: "",
            text: "Corporate Responsibility"
        },
        {
            icon: "",
            text: "California Laws"
        },
        {
            icon: "",
            text: "Careers"
        },
        {
            icon: "",
            text: "Privacy Policy"
        }
    ]
}
const footerBox4 = {
    title: "Contact us",
    content: [
        {
            icon: <BiPhoneCall/>,
            text: "(+612) 2531 5600"
        },
        {
            icon: <BiMailSend/>,
            text: "support@domain.com"
        },
        {
            icon: <BiMap/>,
            text: "PO Box 1622 Vissaosang Street West"
        },
        {
            icon: <AiOutlineClockCircle/>,
            text: "Opening Hours : 8.00AM - 21.00AM"
        }
    ]
}
const footerData = [footerBox1, footerBox2, footerBox3, footerBox4];

export { footerData }
