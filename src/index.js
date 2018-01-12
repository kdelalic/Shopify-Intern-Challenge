import "./style";
import { Component, render } from "preact";

export default class App extends Component {

  state = {
    email: '',
    interest: '',
    validated: true,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(this.state.email)) {
      this.setState({
        ...this.state,
        validated: true,
      })
      console.log("Email: " + this.state.email);
      console.log("Interest: " + this.state.interest);
    } else {
      this.setState({
        ...this.state,
        validated: false,
      })
    }
    event.preventDefault();
  }

  cancelLink = (event) => {
    event.preventDefault();
  }


  render() {
    return (
      <div class="index">
        <h1>Stay up to date with ecommerce trends with Shopify’s newsletter</h1>
        
        <div class="dash"></div>

        <h2>Subscribe for free marketing tips</h2>

        <form noValidate onSubmit={this.handleSubmit}>
          <div class="input">

            <div className="emailValidator">
              <input placeholder="Email Address" class="email" name="email" 
              value={this.state.email} onChange={this.handleChange('email')}
              type="email"/>
              <p class={!this.state.validated ? "wrong" : ""}>Please enter a valid email address</p>
            </div>

            <select value={this.state.interest} 
            onChange={this.handleChange('interest')} name="interest" 
            class={this.state.interest === '' ? "interest default" : "interest"}>
              <option value="" disabled class="placeholder" selected>Interested in...</option>
              <option value="option1">News</option>
              <option value="option2">Marketing</option>
              <option value="option3">Business</option>
              <option value="option4">Economics</option>
            </select>
            
          </div>

          <input type="submit" class="signUp" value="Sign up now"/>
        
        </form>

        <a href="" onClick={this.cancelLink} class="unsub">Unsubscribe</a>
      </div>
    );
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
