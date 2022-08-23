import React from 'react';

const Account = () => {
    return (
        <div className='account'>
            <h1 className='h1'>Marshmello <br /> Event</h1>
            <div className="marsh-account"></div>
            <div className="account-card">
                <h2 className='account_h2'>Create <br /> your  account</h2>
                <form>
                    <div class="form-group">
                        <label for="exampleInputName1">Your name</label>
                        <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter name" minLength="2" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your name with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" minLength="8" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your pasword with anyone else.</small>

                    </div>
                    <div class="form-group" id="sub" >

                        Do you agree to our terms? <br /><input type="checkbox" id="sub" /> Yes, I agree
                    </div>
                    <div className="form-group d-flex">
                        <button type="reset" class="btn-primary">Clear</button>
                        <button type="submit" class="btn-primary">Sign up</button>

                    </div>
                    {/* 
                    <form class="form-submit" action="https://t.me/Mr_Utkirov10" method="POST">
                        <input type="submit" value="Yubor" />
                    </form> */}


                </form>
            </div>
        </div>
    );
};

export default Account;