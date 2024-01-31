import { ReactComponent as RegisterIconSvg } from 'assets/images/register.svg'
import { ReactComponent as CheckIconSvg } from 'assets/images/check.svg'
import { ReactComponent as CloseIconSvg } from 'assets/images/close.svg'
import { ReactComponent as PlusIconSvg } from 'assets/images/plus.svg'
import { ReactComponent as PinIconSvg } from 'assets/images/pin.svg'
import { ReactComponent as BookCheckIcon } from 'assets/images/book_check.svg'
import { ReactComponent as CircleChatIcon } from 'assets/images/chat.svg'
import { ReactComponent as PencilIcon } from 'assets/images/pencil.svg'
import { ReactComponent as CommentIcon } from 'assets/images/comment.svg'
import { ReactComponent as HeartIcon } from 'assets/images/heart.svg'
import { ReactComponent as ScrapIcon } from 'assets/images/scrap.svg'
import { ReactComponent as EllipsisSvg } from 'assets/images/ellipsis.svg'
import { ReactComponent as GoogleLogo } from 'assets/images/g-logo.svg'
import { ReactComponent as GoogleCustom } from 'assets/images/google_custom.svg'
import { ReactComponent as HandIcon } from 'assets/images/hand.svg'
import { ReactComponent as InstagramIconSvg } from 'assets/images/instagram.svg'
import { ReactComponent as KakaoIconSvg } from 'assets/images/kakao.svg'
import { ReactComponent as NoConnectionIcon } from 'assets/images/no_connection.svg'
import { ReactComponent as Resign } from 'assets/images/resign.svg'
import { ReactComponent as RightArrowSvg } from 'assets/images/right_arrow.svg'
import { ReactComponent as ShareIcon } from 'assets/images/share.svg'
import { ReactComponent as TimerPause } from 'assets/images/timer_pause.svg'
import { ReactComponent as TimerStart } from 'assets/images/timer_start.svg'
import { ReactComponent as UrlIcon } from 'assets/images/url.svg'
import { ReactComponent as TrashIconSvg } from 'assets/images/trash.svg'
import { ReactComponent as MessageIconSvg } from 'assets/images/message.svg'

const RightArrow = ({ onClick, className }: { onClick?: (e: React.MouseEvent) => void; className?: string }) => (
  <RightArrowSvg onClick={onClick} className={className} fill="currentColor" cursor="pointer" />
)
const TrashIcon = ({ onClick, className }: { onClick?: (e: React.MouseEvent) => void; className?: string }) => (
  <TrashIconSvg onClick={onClick} className={className} stroke="currentColor" cursor="pointer" />
)
const CloseIcon = ({ onClick, className }: { onClick?: (e: React.MouseEvent) => void; className?: string }) => (
  <CloseIconSvg onClick={onClick} className={className} fill="currentColor" cursor="pointer" />
)
const CheckIcon = ({ onClick, className }: { onClick?: (e: React.MouseEvent) => void; className?: string }) => (
  <CheckIconSvg onClick={onClick} className={className} fill="currentColor" cursor="pointer" />
)
const RegisterIcon = ({ onClick, className }: { onClick?: (e: React.MouseEvent) => void; className?: string }) => (
  <RegisterIconSvg onClick={onClick} className={className} fill="currentColor" cursor="pointer" />
)
const PlusIcon = ({ onClick, className }: { onClick?: (e: React.MouseEvent) => void; className?: string }) => (
  <PlusIconSvg onClick={onClick} className={className} fill="currentColor" cursor="pointer" />
)
const EllipsisIcon = ({ onClick, className }: { onClick?: (e: React.MouseEvent) => void; className?: string }) => (
  <EllipsisSvg onClick={onClick} className={className} stroke="currentColor" cursor="pointer" />
)
const PinIcon = ({ onClick, className }: { onClick?: (e: React.MouseEvent) => void; className?: string }) => (
  <PinIconSvg onClick={onClick} className={className} cursor="pointer" />
)
const InstagramIcon = ({ onClick, className }: { onClick?: (e: React.MouseEvent) => void; className?: string }) => (
  <InstagramIconSvg onClick={onClick} className={className} cursor="pointer" />
)
const KakaoIcon = ({ onClick, className }: { onClick?: (e: React.MouseEvent) => void; className?: string }) => (
  <KakaoIconSvg onClick={onClick} className={className} cursor="pointer" />
)
const MessageIcon = ({ onClick, className }: { onClick?: (e: React.MouseEvent) => void; className?: string }) => (
  <MessageIconSvg onClick={onClick} className={className} cursor="pointer" fill="currentColor" />
)
export {
  RegisterIcon,
  CheckIcon,
  CloseIcon,
  PlusIcon,
  PinIcon,
  BookCheckIcon,
  CircleChatIcon,
  PencilIcon,
  CommentIcon,
  HeartIcon,
  ScrapIcon,
  EllipsisIcon,
  GoogleLogo,
  GoogleCustom,
  HandIcon,
  InstagramIcon,
  KakaoIcon,
  NoConnectionIcon,
  Resign,
  RightArrow,
  ShareIcon,
  TimerPause,
  TimerStart,
  UrlIcon,
  TrashIcon,
  MessageIcon,
}
