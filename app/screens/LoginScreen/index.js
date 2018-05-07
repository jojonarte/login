import React from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { LoginForm } from '../../components/LoginForm';
import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';

export default () => (
	<Container>
      	<KeyboardAvoidingView behavior="padding" style={{width: '100%', alignItems: 'center' }}>
	      	<Logo />
		    <LoginForm />
	    </KeyboardAvoidingView>
	</Container>
);