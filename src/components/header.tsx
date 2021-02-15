/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import ColorModeToggle from "./colormode-toggle"
import Navigation from "./navigation"
import HeaderTitle from "./header-title"

import replaceSlashes from "../utils/replaceSlashes"
import useSiteMetadata from "../hooks/use-site-metadata"

const Header = () => {
  const { siteTitle, siteImage } = useSiteMetadata()
  const { navigation: nav, basePath } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header sx={{ mb: [5, 6] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>

        <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
          <img src={siteImage} alt={siteTitle} />
          <HeaderTitle />
        </Flex>

        <div className="main-menu" 
          sx={{
            boxSizing: `border-box`,
            display: `flex`,
            margin: 0,
            variant: `dividers.bottom`,
            alignItems: `center`,
            justifyContent: `space-between`,
            mt: 3,
            color: `secondary`,
            a: { color: `secondary`, ":hover": { color: `heading` } },
            flexFlow: `wrap`,
          }}
        >
          <Navigation nav={nav} />
          <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
        </div>


      </Flex>

    </header>
  )
}

export default Header
