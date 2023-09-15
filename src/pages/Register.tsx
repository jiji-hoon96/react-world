export default function Register() {
  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <h1>Sign up</h1>
              <p>
                <a href="/login">Have an account?</a>
              </p>
              <form>
                <fieldset>
                  <input type="text" placeholder="Username" />
                </fieldset>
                <fieldset>
                  <input type="text" placeholder="Email" />
                </fieldset>
                <fieldset>
                  <input type="password" placeholder="Password" />
                </fieldset>
                <button>Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
