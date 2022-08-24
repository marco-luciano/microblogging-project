import { Box, Flex } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { auth } from '../../services/firebase';
import { signOut } from 'firebase/auth';
import redirect from '../../utils/redirect';
import { useNavigate } from 'react-router-dom';
import './Navbar.sass'

const Navbar = () => {

    const navigate = useNavigate();

    const logOut = () => {
        signOut(auth);
        redirect(navigate);
    }

   return (
        (
            <div className="Navbar">
                    <Flex justifyContent="space-between" direction="row" gap={10} paddingLeft={10}>
                        <Flex justifyContent="space-between" gap={10}> 
                            <Box className="NavbarItem"><Link href='/'>Home</Link></Box>
                            <Box className="NavbarItem"><Link href='/profile'>Profile</Link></Box>
                        </Flex>
                        <Flex justifyContent="space-between" gap={10} paddingRight={10}>
                            <Box className="NavbarItem"><Link href='/profile'>{auth?.currentUser?.email}</Link></Box>
                            <Box className="NavbarItem"onClick={logOut}><Link>Exit</Link></Box>
                        </Flex>
                    </Flex>
            </div>
        )
   );
}
export default Navbar;
