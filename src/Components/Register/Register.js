import React, { Component } from 'react';
import * as axios from 'axios';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',

      isCheckEmail: false,
      isCheckName: false,
      isCheckPassword: false,
      isCheckUsername: false,
      isCheckConfirmPassword: false,
      isConfirm: false,

      isShowConfirmPassword: false,
      isShowPassword: false,

    }
  }
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,

    })

  }
  onSubmit = (event) => {
    event.preventDefault();
    const { name, password, confirmPassword } = this.state;
    // console.log(this.state);

    if (!this.validate())
      return false;

    //call api
    let url = "http://192.168.1.228:3005/user";
    let body = {
      firstName: this.state.name,
      lastName: "string",
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    }
    axios.post(url, body)
      .then(function (response) {
        // handle success
        console.log("response :", response);
      })
      .catch(function (error) {
        // handle error
        console.log("error :", error);
      })
  }

  validate = () => {
    const { name, password, confirmPassword } = this.state;

    if (this.state.name === "") {
      this.setState({
        isCheckName: true
      });
      //return false;
    } else {
      this.setState({
        isCheckName: false
      })
    };

    if (this.state.username === "") {
      this.setState({
        isCheckUsername: true
      })
      //return false;
    } else {
      this.setState({
        isCheckUsername: false
      })
    };

    if (this.state.email === "") {
      this.setState({
        isCheckEmail: true
      })
    } else {
      this.setState({
        isCheckEmail: false
      })
    };

    if (this.state.password === "") {
      this.setState({
        isCheckPassword: true
      })
    } else {
      this.setState({
        isCheckPassword: false
      })
    };

    if (this.state.confirmPassword === "") {
      this.setState({
        isCheckConfirmPassword: true
      })
    } else {
      this.setState({
        isCheckConfirmPassword: false
      })
    };

    if (password !== "" && password !== confirmPassword) {
      this.setState({
        isConfirm: true,
      })
    }
    else {
      this.setState({
        isConfirm: false
      })
    }

    return true;
  }


  onShowPassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword
    })
  }
  onShowConfirmPassword = () => {
    this.setState({
      isShowConfirmPassword: !this.state.isShowConfirmPassword
    })
  }

  render() {
    return (
      <div className="container">
        <button
          style={{ marginTop: 50 }}
          type="button"
          className="btn btn-success"
          data-toggle="modal"
          data-target="#register"
        >
          Đăng ký</button>
        <div className="modal fade" id="register" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="" style={{ textAlign: "center", width: '100%' }}> Đăng ký</h3>
                <i type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </i>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-8 mt-50">
                    <form onSubmit={this.onSubmit}>
                      <div className="">
                        <label className="floatLeft">Họ và tên</label>
                        <div className="addIcon">
                          <input
                            type="text"
                            name="name"
                            className={!this.state.isCheckName ? "form-control border" : "form-control border1"}
                            value={this.state.name}
                            onChange={this.onChange}
                          />
                          <i className={!this.state.isCheckName ? "fa fa-user-o color" : "fa fa-user-o color1"} aria-hidden="true"></i>
                        </div>
                        <div className="">
                          {!this.state.isCheckName ? "" : <p style={{ color: 'red', marginTop: 3 }}>Vui lòng nhập Tên!</p>}
                        </div>
                      </div>
                      <div className="">
                        <label className="floatLeft">Username</label>
                        <div className="addIcon">
                          <input
                            type="username"
                            name="username"
                            className={!this.state.isCheckUsername ? "form-control border" : "form-control border1"}
                            value={this.state.username}
                            onChange={this.onChange}
                          />
                          <i className={!this.state.isCheckUsername ? "fa fa-user-o color" : "fa fa-user-o color1"} aria-hidden="true"></i>
                        </div>
                        <div className="">
                          {!this.state.isCheckEmail ? "" : <p style={{ color: 'red', marginTop: 3 }}>Vui lòng nhập Username!</p>}
                        </div>
                      </div>
                      <div className="">
                        <label className="floatLeft">Email address</label>
                        <div className="addIcon">
                          <input
                            type="text"
                            name="email"
                            className={!this.state.isCheckEmail ? "form-control border" : "form-control border1"}
                            value={this.state.email}
                            onChange={this.onChange}
                          />
                          <i className={!this.state.isCheckEmail ? "fa fa-envelope-o color" : "fa fa-envelope-o color1"} aria-hidden="true" ></i>
                        </div>
                        <div className="">
                          {!this.state.isCheckEmail ? "" : <p style={{ color: 'red', marginTop: 3 }}>Vui lòng nhập Email!</p>}
                        </div>
                      </div>

                      <div className="">
                        <label className="floatLeft">Password</label>
                        <div className="addIcon">
                          <input
                            type={this.state.isShowPassword ? "text" : "password"}
                            name="password"
                            className={!this.state.isCheckPassword ? "form-control border" : "form-control border1"}
                            value={this.state.password}
                            onChange={this.onChange}
                          />
                          <i className={!this.state.isCheckPassword ? "fa fa-eye color" : "fa fa-eye color1"} aria-hidden="true" onClick={this.onShowPassword}></i></div>
                        <div className="">
                          {!this.state.isCheckPassword ? "" : <p style={{ color: 'red', marginTop: 3 }}>Vui lòng nhập Password!</p>}
                        </div>
                      </div>

                      <div className="">
                        <label className="floatLeft">Confirm password</label>
                        <div className="addIcon">
                          <input
                            type={this.state.isShowConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            className={(!this.state.isCheckPassword && !this.state.isConfirm) ? "form-control border" : "form-control border1"}
                            value={this.state.confirmPassword}
                            onChange={this.onChange}
                          />
                          <i className={(!this.state.isCheckPassword && !this.state.isConfirm) ? "fa fa-eye color" : "fa fa-eye color1"} aria-hidden="true" onClick={this.onShowConfirmPassword}></i></div>
                        <div className="">
                          {!this.state.isCheckConfirmPassword ? "" : <p style={{ color: 'red', marginTop: 3 }}>Vui lòng nhập lại Password!</p>}
                          {!this.state.isConfirm ? "" : <p style={{ color: 'red', marginTop: 3 }}>Password không chính xác!</p>}
                        </div>
                        <br />
                        <button className="btn btn-sm btn-success pd-20" type="submit"
                        > Sign in</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Register