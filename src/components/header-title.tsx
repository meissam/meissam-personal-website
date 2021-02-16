/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import replaceSlashes from "../utils/replaceSlashes"
import useSiteMetadata from "../hooks/use-site-metadata"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"

const HeaderTitle = () => {
  const { siteTitle , author, siteHeadline } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none`, marginLeft:`10px` }}
    >
      <div sx={{ my: 0, fontWeight: `700`, fontSize: [2], color:`primary` }}>{author}</div>
      <div sx={{ my: 0, fontWeight: `700`, fontSize: [`12px`], color:`secondary` }}>{siteHeadline}</div>
    </Link>
  )
}

export default HeaderTitle
