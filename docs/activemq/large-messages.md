# Large Messages Overview

Large messages can be sent as a BlobMessage.  However, to actually use them with a JMS Template, you need an implementation of a class which implements MessageCreator.  Here is an example:

```
public class BlobMessageCreator implements MessageCreator {

    InputStream stream;
    boolean persistent;

    public BlobMessageCreator(InputStream stream, boolean persistent) {
        this.stream = stream;
        this.persistent = persistent;
    }

    @Override
    public Message createMessage(Session session) throws JMSException {
        BlobMessage message = ((ActiveMQSession)session).createBlobMessage(stream);
        if (persistent) {
            message.setJMSDeliveryMode(DeliveryMode.PERSISTENT);
        }
        return message;
    }

}
```