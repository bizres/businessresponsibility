import {css, tw} from 'twind/css';
import {Link} from "@mui/material";
import {useRouter} from "next/router";

const LogoHeader = () => {
  const router = useRouter()
  const {locale} = router;

  return (
    <header className={tw(`bg-white`)}>
      <div className={tw(`max-w-full h-0.5 bg-yellow-bright mt-10`)}>
        <div className={tw(`max-w-7xl mx-auto`)}>
          <div className={tw(`relative`)}>
            <Link href={`/${locale}`} title={"Home"}>
              <img className={tw(`absolute h-40 w-40 -left-20 -top-20`)} src="/logo_transparent.png" alt="logo"/>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default LogoHeader;
