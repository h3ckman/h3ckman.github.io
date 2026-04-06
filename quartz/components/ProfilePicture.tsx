import { joinSegments, pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ProfilePicture: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const profileSrc = joinSegments(baseDir, "static/profile.jpg")
  return (
    <div class={classNames(displayClass, "profile-picture")}>
      <img src={profileSrc} alt={cfg.pageTitle} width={150} height={150} />
    </div>
  )
}

ProfilePicture.css = `
.profile-picture {
  text-align: left;
}

.profile-picture img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}
`

export default (() => ProfilePicture) satisfies QuartzComponentConstructor
