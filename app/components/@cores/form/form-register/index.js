import { h } from "preact";
import Title from "components/@cores/title";
import Description from "components/@cores/description";
import Button from "components/@cores/button";
import { Form } from "../style";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const FormRegister = props => {
  const submitLogin = () => {
    console.log("submit");
  };
  return (
    <Form onSubmit={submitLogin}>
      <Title className="account__title" bold>
        Đăng ký thành viên
      </Title>
      <TextField
        id="gmail-login"
        name="email"
        type="email"
        variant="outlined"
        className="input-control"
        label="Địa chi email"
        fullWidth
      />
      <TextField
        id="full-name"
        name="fullName"
        variant="outlined"
        className="input-control"
        label="Họ và tên"
        fullWidth
      />
      <TextField
        id="password"
        className="input-control"
        name="password"
        type="password"
        variant="outlined"
        label="Mật khẩu"
        fullWidth
      />
      <TextField
        id="re-password"
        className="input-control"
        name="rePassword"
        type="password"
        variant="outlined"
        label="Nhập lại mật khẩu"
        fullWidth
      />
      <Button id="submit-login" full type="submit">
        Đăng ký
      </Button>
      <Description className="register-now">
        Bạn đã có tài khoản?{" "}
        <Link className="link" to="/auth/login">
          Đăng nhập
        </Link>
      </Description>
    </Form>
  );
};

export default FormRegister;
