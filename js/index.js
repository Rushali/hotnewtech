let googlePayClient;
const baseCardPaymentMethod = {
    type: 'CARD',
    parameters: {
      allowedCardNetworks: ['VISA','MASTERCARD'],
      allowedAuthMethods: ['PAN_ONLY','CRYPTOGRAM_3DS']
    }
};

const googlePayBaseConfiguration = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [baseCardPaymentMethod]
};

function onGooglePayLoaded() {
  googlePayClient = new google.payments.api.PaymentsClient({
    environment: 'TEST'
  });
  googlePayClient.isReadyToPay(googlePayBaseConfiguration)
  .then(function(response) {
    if(response.result) {
      createAndAddButton();
    } else {
      alert("Unable to pay using Google Pay");
    }
  }).catch(function(err) {
    console.error("Error determining readiness to use Google Pay: ", err);
  });
}

function createAndAddButton() {

    const googlePayButton = googlePayClient.createButton({
  
      // currently defaults to black if default or omitted
      buttonColor: 'default',
  
      // defaults to long if omitted
      buttonType: 'long',
  
      onClick: onGooglePaymentsButtonClicked
    });
  
    document.getElementById('buy-now').appendChild(googlePayButton);
  }
  
  function onGooglePaymentsButtonClicked() {
    const tokenizationSpecification = {
        type: 'PAYMENT_GATEWAY',
        parameters: {
          gateway: 'example',
          gatewayMerchantId: 'gatewayMerchantId'
        }
    };
    
    const cardPaymentMethod = {
        type: 'CARD',
        tokenizationSpecification: tokenizationSpecification,
        parameters: {
          allowedCardNetworks: ['VISA','MASTERCARD'],
          allowedAuthMethods: ['PAN_ONLY','CRYPTOGRAM_3DS'],
          billingAddressRequired: true,
          billingAddressParameters: {
            format: 'FULL',
            phoneNumberRequired: true
          }
        }
    };

    // TODO: everything is negotiable
    const transactionInfo = {
        totalPriceStatus: 'FINAL',
        totalPrice: '500',
        currencyCode: 'INR'
    };

    const merchantInfo = {
    // merchantId: '01234567890123456789', Only in PRODUCTION
        merchantName: 'HOT NEW TECH'
    };

    const paymentDataRequest = Object.assign({}, googlePayBaseConfiguration, {
        allowedPaymentMethods: [cardPaymentMethod],
        transactionInfo: transactionInfo,
        merchantInfo: merchantInfo   
    });

    googlePayClient
    .loadPaymentData(paymentDataRequest)
    .then(function(paymentData) {
        processPayment(paymentData);
    }).catch(function(err) {
        // Log error: { statusCode: CANCELED || DEVELOPER_ERROR }
    });
  }

  function processPayment(paymentData) {
    // TODO: Send a POST request to your processor with the payload
    // https://us-central1-devrel-payments.cloudfunctions.net/google-pay-server 
    // Sorry, this is out-of-scope for this codelab.
    return new Promise(function(resolve, reject) {
      // @todo pass payment token to your gateway to process payment
      const paymentToken = paymentData.paymentMethodData.tokenizationData.token;
      console.log('mock send token ' + paymentToken + ' to payment processor');
      setTimeout(function() {
        console.log('mock response from processor');
        alert('done');
        resolve({});
      }, 800);
    });
  }