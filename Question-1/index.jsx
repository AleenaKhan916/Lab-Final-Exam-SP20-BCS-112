<Wrapper>
            <TextField
              id="standard-basic"
              label="Name"
              value={login.username}
              variant="standard"
              onChange={(e) => OnValueChange(e)}
              name="username"
            />
            <TextField
              id="standard-basic"
              label="Password"
              value={login.password}
              variant="standard"
              onChange={(e) => OnValueChange(e)}
              name="password"
            />
            {error && <Error>{error}</Error>}
            <LoginButton variant="contained" onClick={() => loginUser()}>
              Login
            </LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignButton variant="text" onClick={() => toggleSignup()}>
              Sign Up
            </SignButton>
          </Wrapper>