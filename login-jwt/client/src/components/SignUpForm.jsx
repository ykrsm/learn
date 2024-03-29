import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaiseButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Name"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="password"
          type="password"
          name="password"
          errorText={errors.password}
          onChange={onChange}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaiseButton type="submit" label="Create New Account" primary />
      </div>

      <CardText>Alraedy have an account <Link to={'/login'}>Log in</Link></CardText>
    </form>
  </Card>
);

SignUpForm.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default SignUpForm;