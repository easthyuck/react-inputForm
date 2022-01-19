const BasicForm = (props) => {
  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" />
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="email" id="email" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
