import React, { Component } from 'react'
import './Login.css';
import * as axios from 'axios';


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',

      isCheckUserName: false,
      isCheckPassword: false,

      isShowPassword: false,
    }
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();

    if (!this.validate())
      return false;

    //call api
    let dataLogin = {
      userName: this.state.userName,
      password: this.state.password
    }

    let config = {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      }
    }

    axios.post('http://192.168.1.228:3005/auth/login', dataLogin, config)
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
    if (this.state.userName === "") {
      this.setState({
        isCheckUserName: true
      })
      // return false;
    } else {
      this.setState({
        isCheckUserName: false
      })
    };

    if (this.state.password === "") {
      this.setState({
        isCheckPassword: true
      })
      return false;
    } else {
      this.setState({
        isCheckPassword: false
      })
    };

    return true;

  }
  onShowPassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword
    })
  }


  render() {

    return (
      <div className="container ">
        <button
          style={{ marginTop: 50 }}
          type="button"
          className="btn btn-success"
          data-toggle="modal"
          data-target="#login">Đăng nhập</button> &nbsp;
        <div className="modal fade" id="login" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content border">
              <div className="modal-header">
                <h3 className="" style={{ textAlign: "center", width: '100%' }}> Đăng nhập </h3>
                <i type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </i>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-8 mt-50">
                    <form className="" onSubmit={this.onSubmit}>
                      <div>
                        <label className="floatLeft">Username</label>
                        <div className="addIcon">
                          <input
                            type="userName"
                            name="userName"
                            className={!this.state.isCheckUserName ? "form-control border" : "form-control border1"}
                            placeholder="Username"
                            value={this.state.userName}
                            onChange={this.onChange} />
                          <i className={!this.state.isCheckUserName ? "fa fa-user-o color" : "fa fa-user-o color1"} aria-hidden="true" ></i>
                        </div>
                        <div className="">
                          {!this.state.isCheckUserName ? "" : <p style={{ color: 'red', marginTop: 3 }}>Vui lòng nhập UserName!</p>}
                          {/* {!this.state.isCheckEmail ? "" : <i className="fa fa-exclamation-circle" aria-hidden="true" style={{ color: 'red', fontSize: 30 }}></i>} */}
                        </div>
                      </div>
                      <div>
                        <label className="floatLeft">Password</label>
                        <div className="addIcon">
                          <input
                            type={this.state.isShowPassword ? "text" : "password"}
                            name="password"
                            className={!this.state.isCheckPassword ? "form-control border" : "form-control border1"}
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange} />
                          <i className={!this.state.isCheckPassword ? "fa fa-eye color" : "fa fa-eye color1"} aria-hidden="true" onClick={this.onShowPassword} ></i>
                        </div>
                        <div className="">
                          {!this.state.isCheckPassword ? "" : <p style={{ color: 'red', marginTop: 3 }}>Vui lòng nhập Password!</p>}
                          {/* {!this.state.isCheckPassword ? "" : <i className="fa fa-exclamation-circle" aria-hidden="true" style={{ color: 'red', fontSize: 30 }}></i>} */}
                        </div>
                        <br />
                        <button
                          className="btn btn-sm btn-success pd-20"
                          type="submit"
                          onClick={this.onClick} > Sign in</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          {/* <div className="showThongbao">
                      <p>Đăng nhập thành công!</p>
                    </div> */}
        </div>
      </div>
    )
  }
}
