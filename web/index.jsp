<%--
  Created by IntelliJ IDEA.
  User: abrahao
  Date: 19/03/18
  Time: 16:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Ontology Graph Test</title>
    <script type="text/javascript" src="js/vis.min.js"></script>
    <script type="text/javascript" src="js/matches.js"></script>
    <link href="css/vis.min.css" rel="stylesheet" type="text/css" />

    <style type="text/css">
      html, body {
        font: 10pt arial;
      }
      #mynetwork {
        width: 1200px;
        height: 1200px;
        border: 1px solid lightgray;
      }
    </style>
  </head>
  <body>
  <div id="mynetwork"></div>

  <script type="text/javascript">

      var nodes = null;
      var edges = null;
      var network = null;

      defineMatches();

      // Instantiate our network object.
      var container = document.getElementById('mynetwork');
      var data = {
          nodes: nodes,
          edges: edges
      };
      var options = {
          nodes: {
              shape: 'dot',
              scaling:{
                  label: {
                      min:8,
                      max:20
                  }
              }
          },
          edges:{
              arrows: 'to',
              scaling:{
                  label: true,
              },
              shadow: false,
              smooth: true,
          }

      };
      network = new vis.Network(container, data, options);

      //network.setOptions(options);
      // initialize your network!
  </script>
  </body>
</html>
