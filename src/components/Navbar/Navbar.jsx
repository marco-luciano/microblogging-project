import { Box, Flex } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import './Navbar.sass'

const Navbar = () => {
   return (
       <div className="Navbar">
            <Flex direction="row" gap={10} paddingLeft={10}>
                <Box className="NavbarItem"><Link href='/'>Home</Link></Box>
                <Box className="NavbarItem"><Link href='/profile'>Profile</Link></Box>
            </Flex>
       </div>
   );
}
export default Navbar;
