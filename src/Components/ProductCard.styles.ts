import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  height: 450px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: #f5f5f5;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductName = styled.h3`
  font-size: 18px;
  margin: 0 0 8px 0;
  color: #333;
`;

export const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #2c5f2d;
  margin: 0 0 12px 0;
`;

export const AddToCartButton = styled.button`
  background-color: #000;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333;
  }
`;
