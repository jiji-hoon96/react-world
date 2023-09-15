export default function Login() {
  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <h1>Sign in</h1>
              <p>
                <a href="/register">Need an account?</a>
              </p>
              <form>
                <fieldset>
                  <input type="text" placeholder="Email" />
                </fieldset>
                <fieldset>
                  <input type="password" placeholder="Password" />
                </fieldset>
                <button>Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
