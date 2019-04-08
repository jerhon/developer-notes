# Process Integration

Process Integration is a tool for building integrations from SAP.

## Building an IFlow to send IDocs to ECC

The best way I found to do this was with an HTTP adapter and IDoc adapter.

HTTP ALE Adapater -> IDOC_AAE Adapter

The interface for both the Sender & Receiver can be the IDoc directly.  This enables a straight pass through mechanism.

I tried various combinations of different adapters and channels for the ingest on the IDoc, but it didn't work.

The SOAP / WS adapters does not work, it mangles the XML and includes extra namespaces on the IDOC element.  the IDoc_ALE adapter doesn't like this as it is VERY strict about the attributes that exist on the IDoc.

In the EDI_DC40 record, the SND & RCV parameters should be thought of from a systems perspective and not a networking perspective.  Sender is the partner/system that sent the IDoc.  Receiver is a partner/system receiving the IDoc.

