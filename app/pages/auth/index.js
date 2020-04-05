import { h, Component } from "preact";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import {
  Container,
  Welcome,
  Media,
  MediaTitle,
  MediaContent,
  AllForm,
  ListSocial,
  SocialLogin,
  SocialLogo
} from "./style";
import Title from "components/@cores/title";
import Description from "components/@cores/description";
import { Grid } from "@material-ui/core";
import FormLogin from "components/@cores/form/form-login";
import FormRegister from "components/@cores/form/form-register";
import IconCoin from "assets/img/coins@2x.png";
import IconSmart from "assets/img/top-sales@2x.png";
import IconWallet from "assets/img/wallet@2x.png";
import IconBackpack from "assets/img/backpack@2x.png";
import FacebookLogin from "react-facebook-login";
import LogoFacebook from "assets/img/fb-icon.png";
import GoogleLogin from "react-google-login";
import LogoGoogle from "assets/img/google-logo.png";

const Auth = props => {
  const match = useRouteMatch();

  const responseFacebook = res => {
    console.log(res);
  };

  const facebookFail = err => {
    console.log(err);
  };

  const responseGoogle = res => {
    console.log(res);
  };

  return (
    <div id="login">
      <Welcome>
        <Title className="title-welcome" bold>
          Đăng ký thành viên Mentor - Cùng nhau học hỏi, tích luỹ kinh nghiệm
        </Title>
        <Description className="description-welcome">
          Nhanh chóng, tiện lợi và an toàn. Đăng ký liền tay, rinh ngay quyền
          lợi.
        </Description>
      </Welcome>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Media>
                  <img src={IconCoin} width={65} height={70} />
                  <MediaTitle>Tích điểm nhanh chóng</MediaTitle>
                  <MediaContent>
                    Tích điểm đối với mỗi lượt hoàn thành thuê gia sư. Quy đổi
                    thành sao để tạo thêm uy tín cho gia sư.
                  </MediaContent>
                </Media>
              </Grid>
              <Grid item xs={12} md={6}>
                <Media>
                  <img src={IconSmart} width={55} height={70} />
                  <MediaTitle>Tiện ích thông minh</MediaTitle>
                  <MediaContent>
                    Nhận thông báo và tin nhắn ngay lập tức khi được khách hàng
                    thuê.
                  </MediaContent>
                </Media>
              </Grid>
              <Grid item xs={12} md={6}>
                <Media>
                  <img src={IconWallet} width={60} height={70} />
                  <MediaTitle>Tích điểm nhanh chóng</MediaTitle>
                  <MediaContent>
                    Phương thức thanh toán tiện lợi, an toàn. Tích hợp chức năng
                    lưu thẻ để thuê gia sư lần sau.
                  </MediaContent>
                </Media>
              </Grid>
              <Grid item xs={12} md={6}>
                <Media>
                  <img src={IconBackpack} width={55} height={70} />
                  <MediaTitle>Tích điểm nhanh chóng</MediaTitle>
                  <MediaContent>
                    Nhận thông báo ưu đãi từ Mentor khi có kế hoạch thuê gia sư
                    để học những môn học phù hợp với giá tốt nhất.
                  </MediaContent>
                </Media>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <AllForm>
              <Switch>
                <Redirect from={match.path} to={`${match.path}/login`} exact />
                <Route path={`${match.path}/register`} exact>
                  <FormRegister />
                </Route>
                <Route path={match.path + "/login"} exact>
                  <FormLogin />
                </Route>
              </Switch>
              <ListSocial>
                <FacebookLogin
                  appId="3808146532532714"
                  // appId="903378619781560"
                  version="2.3"
                  size="metro"
                  language="vi_VN"
                  textButton={
                    <SocialLogin>
                      <SocialLogo src={LogoFacebook} />
                      Đăng nhập với Facebook
                    </SocialLogin>
                  }
                  fields="name,email"
                  callback={responseFacebook}
                  onFailure={facebookFail}
                  cssClass="btn-login-facebook"
                />
                <GoogleLogin
                  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  render={renderProps => (
                    <button onClick={renderProps.onClick}>
                      <SocialLogin>
                        <SocialLogo src={LogoGoogle} />
                        Đăng nhập với Google
                      </SocialLogin>
                    </button>
                  )}
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </ListSocial>
            </AllForm>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Auth;
