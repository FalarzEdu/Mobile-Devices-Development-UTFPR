import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { ThemeProvider, ThemeContext } from '../../contexts/ThemeContext';
import { Button, Text } from 'react-native';

describe('ThemeProvider', () => {
  it('Renderiza com o tema escuro (padrão)', () => {
    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => <Text testID="theme-mode">{theme.mode}</Text>}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    const themeMode = screen.getByTestId('theme-mode');
    expect(themeMode.props.children).toBe('dark');
  })

  it('Muda o tema de "escuro" para "claro"', () => {
    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => (
            <>
              <Text testID="theme-mode">{theme.mode}</Text>
              <Button testID="toggle-theme-button" title="Toggle Theme" onPress={toggleTheme} />
            </>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    // Verifica se o modo está no padrão (dark)
    const themeMode = screen.getByTestId('theme-mode');
    expect(themeMode.props.children).toBe('dark');

    // Pressiona o botão
    const toggleButton = screen.getByTestId('toggle-theme-button');
    fireEvent.press(toggleButton);

    // Verifica se o modo foi alterado
    expect(themeMode.props.children).toBe('light');
  });
});