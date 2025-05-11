import { View, StyleSheet } from 'react-native';
import AuthHeader from '@components/auth/AuthHeader';
import AuthForm from '@components/auth/AuthForm';
import AuthFooter from '@components/auth/AuthFooter';

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.semicircle} />
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
  semicircle: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 300,
    backgroundColor: '#94A9FF',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
  },
});
