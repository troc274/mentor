import { h } from "preact";
import Title from "components/@cores/title";
import Description from "components/@cores/description";
import Button from "components/@cores/button";
import { Form } from "../style";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const FormLogin = props => {
  const submitLogin = () => {
    console.log("submit");
  };
  return (
    <Form onSubmit={submitLogin}>
      <Title className="account__title" bold>
        Đăng nhập
      </Title>
      <Description className="account__description" bold>
        Đăng nhập ngay để trải nghiệm
      </Description>
      <TextField
        id="gmail-login"
        name="email"
        variant="outlined"
        className="input-control"
        label="Địa chi email"
        fullWidth
      />
      <TextField
        id="password"
        className="input-control"
        name="password"
        variant="outlined"
        label="Mật khẩu"
        fullWidth
      />
      <Button id="submit-login" full type="submit">
        Đăng nhập
      </Button>
      <Description className="forgot-pass">
        Quên mật khẩu?{" "}
        <Link to="/forgot" className="link">
          Nhấn vào đây
        </Link>
      </Description>
      <Description className="register-now">
        Bạn chưa có tài khoản?{" "}
        <Link className="link" to="/auth/register">
          Đăng ký
        </Link>
      </Description>
      <div className="or">Hoặc</div>
    </Form>
  );
};

export default FormLogin;
