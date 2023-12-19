import { Icon } from "@/components/custom";
import { HeaderContainer, HeaderWrapper, NavItem, NavList } from "./style";
import Navbar from "./elements/navbar";
import { useState } from "react";
import useScroll from "@/hooks/useScroll";
import { Flex, Span } from "@/components/basic";
import { Drawer } from "antd";

const Header = () => {
    const [visible, setVisible] = useState(false);
    const [, scrollY,] = useScroll();

    return (
        <HeaderContainer isTop={!(scrollY > 50)}>
            <Flex $style={{
                fDirection: 'column',
                vAlign: 'center',
                w: '100%'
            }}>
                <HeaderWrapper>
                    <Icon icon="Logo" width="auto" height="32px" />
                    <Navbar />
                    <Flex $style={{ fDirection: 'row', gap: '6px', p: '6px 12px' }}>
                        <Icon icon="International" width="24px" height="24px" />
                        <Span $style={{ color: 'colorSecondary', weight: '600' }}>Eng</Span>
                    </Flex>
                </HeaderWrapper>
                <NavList>
                    <NavItem>Use</NavItem>
                    <NavItem>Learn</NavItem>
                    <NavItem>Build</NavItem>
                    <NavItem>Community</NavItem>
                </NavList>
            </Flex>
        </HeaderContainer>
    )
}

export default Header;
