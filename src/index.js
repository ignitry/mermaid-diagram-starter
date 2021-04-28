import mermaid from 'mermaid';
import "./style.sass";

var config = {
  startOnLoad:true,
  flowchart:{
    useMaxWidth:true,
    htmlLabels:true,
    curve:'cardinal',
  },
  securityLevel:'loose',
};

mermaid.initialize(config);
