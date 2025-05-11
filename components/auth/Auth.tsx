import { View, StyleSheet } from 'react-native';
import AuthHeader from '@components/auth/AuthHeader';
import AuthForm from '@components/auth/AuthForm';
import AuthFooter from '@components/auth/AuthFooter';

export default function Auth() {
  return (
    <View style={styles.container}>
      <AuthHeader />
      <AuthForm />
      <AuthFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAFD',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
  },
});
