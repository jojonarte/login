import React from 'react';
import { StatusBar } from 'react-native';

import LoginForm from '../../components/LoginForm';
import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';

export default () => (
	<Container>
		<StatusBar translucent={false} barStyle="light-content"/>
	    <Logo />
	    <LoginForm />
	</Container>
);