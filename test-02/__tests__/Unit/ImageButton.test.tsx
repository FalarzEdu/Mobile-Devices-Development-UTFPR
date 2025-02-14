// HeaderActionSheet.test.js
import React, { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import ImageButton from '../../components/specifics/ImageButton';
import { useRouter } from 'expo-router';
import { handleLogin } from '../../utils/authUtils';

test('Renderiza o botão', () => {
  render(
    <ImageButton 
      heigth={100} 
      imagePath={require("../../assets/login-btn.png")} 
      width={100} 
      testID='image-button'
    />
  );
  const element = screen.getByTestId('image-button');
  expect(element).toBeTruthy();
});

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

test('Botão chama a função de login', () => {
  const username = 'Fulano';
  const password = '123';

  const mockPush = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({
    push: mockPush,
  });

  render(
    <ImageButton 
      heigth={100} 
      imagePath={require("../../assets/login-btn.png")} 
      width={100}
      onPress={() => handleLogin(username, password, { push: mockPush })}
      testID='image-button'
    />
  );
  const button = screen.getByTestId('image-button');

  fireEvent.press(button)

  expect(mockPush).toHaveBeenCalledWith('/listing');
})