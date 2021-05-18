import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SimpsonsQuote from '../containers/SimpsonsQuote';

const server = setupServer(
    rest.get('https://thesimpsonsquoteapi.glitch.me/quotes',
    (req, res, ctx) => {
        return res(
            ctx.json([
                {
                   character: 'Duffman',
                   quote: 'Oh yeah!',
                   image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png?1497567511709",
                },
            ])
        );
    })
);

describe('SimpsonsQuote Container ', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
  
    it('fetches a quote and then shows it', async () => {
      render(<SimpsonsQuote />);
  
      const button = screen.getByRole('button');
      fireEvent.click(button);
  
      return waitFor(() => {
        screen.getByAltText('Duffman');
        screen.getByText(
          'Oh yeah!'
        );
      });
    });

});