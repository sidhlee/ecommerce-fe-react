import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Divider,
  IconButton,
  Image,
  List,
  Flex,
  Text,
} from '@chakra-ui/react';
import QuantitySelect from '../../common/components/QuantitySelect';
import { ICartItem } from './cartTypes';

type CartItemsProps = {
  cartItems: ICartItem[];
  handleQuantityChange: (valueString: string, item: ICartItem) => void;
  handleRemoveItemClick: (id: number) => void;
};

const CartItems: React.FC<CartItemsProps> = ({
  cartItems,
  handleQuantityChange,
  handleRemoveItemClick,
}) => {
  return (
    <List mt="5">
      {cartItems.map((item) => (
        <>
          <Divider />
          <Flex key={item.variant} py="7">
            <Box
              pos="relative"
              minW={['118px', '118px', '150px']}
              minH={['118px', '118px', '150px']}
              mr={[3, 3, 5]}
            >
              {/* TODO: fetch thumbnail url from server */}
              <Image
                pos="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                src={item.thumbnailUrl}
                alt={item.name}
                objectFit="contain"
              />
            </Box>
            <Box>
              <Text mb="2" fontSize="lg">
                ${item.price}
              </Text>
              <Text>{item.name}</Text>
              <Text mb="2" fontSize="sm" color="gray.500">
                {item.productName}
              </Text>
              <QuantitySelect
                handleQuantityChange={(valueString: string) => {
                  handleQuantityChange(valueString, item);
                }}
                defaultValue={item.qty}
                labelHidden
              />
            </Box>
            <Box ml="auto">
              <IconButton
                type="button"
                onClick={() => handleRemoveItemClick(item.variant)}
                size="sm"
                icon={<DeleteIcon />}
                aria-label="remove item"
              />
            </Box>
          </Flex>
        </>
      ))}
    </List>
  );
};

export default CartItems;
