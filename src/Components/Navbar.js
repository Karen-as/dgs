import { useState } from "react" 
import Logo from "../Assets/Logo.svg" 
import { BsCart2 } from "react-icons/bs"
import { HiOutlineBars3 } from "react-icons/hi2"
import { 
    Box, 
    Drawer, 
    ListItem, 
    ListItemButton,
    ListItemIcon, 
    ListItemText 
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Inicio",
            icon: <HomeIcon />,
        },
        {
            text: "Sobre Nosotros",
            icon: <InfoIcon />,
        },
        {
            text: "Usuarios",
            icon: <CommentRoundedIcon />,
        },
        {
            text: "Contacto",
            icon: <PhoneRoundedIcon />,
        },
        {
            text: "Carrito",
            icon: <ShoppingCartRoundedIcon />,
        },
    ]

  return ( 
  <nav>
    <div className="nav-logo-container">
    <img src={Logo} alt="" />
    </div>
    <div className="navbar-links-container">
        <a href="">Inicio</a>
        <a href="">Sobre Nosotros</a>
        <a href="">Usuarios</a>
        <a href="">Contacto</a>
        <a href="">
            <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Reserva ahora</button>
    </div>
    <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div>
  </nav>
  );
};

export default Navbar;