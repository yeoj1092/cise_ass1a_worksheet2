import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    describe('Addition', () => {
      it('knows that 2 and 2 make 4', () => {
        expect(2 + 2).toBe(4);
      });
    });

    describe('subtraction', () => {
      it('knows that 4 subtract 2 make 2', () => {
        expect(4 - 2).toBe(2);
      });
    });
