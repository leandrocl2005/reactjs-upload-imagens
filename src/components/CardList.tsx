import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [selectedUrl, setSelectedUrl] = useState('');
  const { onOpen, isOpen, onClose } = useDisclosure();

  // TODO MODAL USEDISCLOSURE
  const openImageModal = (urlImage: string): void => {
    // TODO SELECTED IMAGE URL STATE
    setSelectedUrl(urlImage);
    // TODO FUNCTION HANDLE VIEW IMAGE
    onOpen();
  };

  return (
    <>
      <SimpleGrid columns={3} spacing={10}>
        {cards.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={() => {
              openImageModal(card.url);
            }}
          />
        ))}
      </SimpleGrid>

      {selectedUrl && (
        <ModalViewImage
          isOpen={isOpen}
          onClose={onClose}
          imgUrl={selectedUrl}
        />
      )}
    </>
  );
}
