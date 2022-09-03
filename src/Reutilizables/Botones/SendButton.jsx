import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const SendButton = () => {

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div>
      <Button
        variant="success"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        href="/repEnviado"
      >
        {isLoading ? 'Enviando...' : 'Enviar'}
      </Button>
    </div>
  )
}
