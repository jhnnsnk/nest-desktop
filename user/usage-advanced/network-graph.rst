Network graph
=============

|br|

.. grid:: 4
    :gutter: 1

    .. card::	Network node
	:link: node
	:link-type: ref
	
	

	.. image:: /_static/img/network_model/nodes.png

    .. card::	Network edge
	:link: edge
	:link-type: ref
	
	

	.. image:: /_static/img/network_model/edges.png

    .. card::	Annotation
	:link: annotation
	:link-type: ref
	
	

	.. image:: /_static/img/network_model/annotations.png


    .. card::	Example
	:link: example
	:link-type: ref
	
	
	
	.. image:: /_static/img/network_model/example_2.png
	.. image:: /_static/img/network_model/example.png

Graphical representations are a direct expression of how researchers think about a network model.
They convey an intuitive understanding of network structures, relationships, and other properties central to the dynamics, and may also reflect how a model is implemented.
If similar diagram styles are used, diagrams facilitate the reading of an article and allow for comparability of models across publications.

For visually constructing and inspecting network graphs, NEST Desktop builds on the graphical notation introduced in the article "Connectivity concepts in neuronal network modeling" [1]_.
We suggest to cite this article as a permanent reference for the proposed notation, while this documentation serves as a living reference allowing for further modification.

Here, we define the graphical elements used for :ref:`Network nodes <node>` and :ref:`Edges <edge>`.
We also provide details on the conventions for the :ref:`annotation` of an edge as introduced in [1]_, even though they are presently not included in the NEST Desktop interface, and finally we show an :ref:`example`.

To generate static publication-ready visualizations of network graphs in agreement with the graphical notation, please refer to this lightweight :ref:`libreoffice_extension`.

|br|

.. _node:

Network node
============

A network node in the notation represents one or multiple units. 
These units are either neuron or neural population models, or devices providing input or output. Network connectivity is defined between these graphically represented nodes. Nodes are drawn as basic shapes. A textual label can be placed inside the node for identification. Nodes are differentiated according to a node class and a node type.


Node class
----------
The node class determines if a node represents an individual unit or a population of units by different frames of the shapes depicting the nodes. The distinction is a recommendation for diagrams that contain both kinds of nodes.

*Individual unit*

.. grid:: 2
	
	.. grid-item::
		:columns: 1
		
		.. image:: /_static/img/screenshots/network/IndividualUnit.png
		
	.. grid-item::
		:columns: 11
		
		A node representing an individual unit may be depicted as a shape with a thin, single frame. Note that such an individual unit may be a population (e.g., neural mass) model.

*Population*

.. grid:: 2
	
	.. grid-item::
		:columns: 1
		
		.. image:: /_static/img/screenshots/network/Population.png
	
	.. grid-item::
		:columns: 11
		
		A node representing a population of units may be depicted as a shape with either a thick frame or a double frame. It is in principle possible to represent a group of population models this way.

Node type
---------
The node type refers to a defining property of a node and is expressed by a unique shape.

*Generic node*

.. grid:: 2
	
	.. grid-item::
		:columns: 1
		
		.. image:: /_static/img/screenshots/network/GenericNode.png
	
	.. grid-item::
		:columns: 11
		
		A generic node, represented by a square, is used if the specific node types do not apply or are not intended to be emphasized.


*Excitatory neural node*

.. grid:: 2
	
	.. grid-item::
		:columns: 1
		
		.. image:: /_static/img/screenshots/network/ExcitatoryNeuralNode.png
	
	.. grid-item::
		:columns: 11
		
		An excitatory neural node, depicted by a triangle, is used if the units represent neurons, and their effect on targets is excitatory.

*Inhibitory neural node*

.. grid:: 2
	
	.. grid-item::
		:columns: 1
		
		.. image:: /_static/img/screenshots/network/InhibitoryNeuralNode.png
	
	.. grid-item::
		:columns: 11
		
		An inhibitory neural node, depicted by a circle, is used if the units represent neurons and their effect on targets is inhibitory.

*Stimulating device node*

.. grid:: 2
	
	.. grid-item::
		:columns: 1
		
		.. image:: /_static/img/screenshots/network/StimulatingDeviceNode.png
	
	.. grid-item::
		:columns: 11
		
		A stimulating device node, depicted by a hexagon, provides external input to other network nodes. Stimulating devices can be abstract units which for instance supply stochastic input spikes. Nodes with more refined neuron properties can also be considered as stimulating devices if they are external to the main network studied.

*Recording device node*

.. grid:: 2
	
	.. grid-item::
		:columns: 1
		
		.. image:: /_static/img/screenshots/network/RecordingDeviceNode.png
	
	.. grid-item::
		:columns: 11
		
		A recording device node, depicted by a parallelogram, contains non-neural units that record activity data from other network nodes.

Node label
----------

In NEST Desktop, each node graph is labeled to identify the model of the node.
By default, it creates a direct current generator (dc) for a stimulus
and a voltmeter (vm) for a recording device.
Neurons are just labeled with (n).
You can find the full label of the node model in the network controller.

Node color
----------

.. image:: /_static/img/screenshots/network/node-shapes.png
   :align: right
   :target: #node-colors

In NEST Desktop, nodes and connections contain parameter configurations
which are displayed in the controller panel in the side navigation.
The color of nodes helps you to associate the network graph with the controller
as well as the corresponding visualization of the network activity.

|br|

.. _edge:

Network edge
============
A network edge represents a connection or projection between two nodes.
Edges are depicted as arrows. Both straight and curved lines are possible. Edges are differentiated according to the categories determinism, edge type, and directionality.

Determinism
-----------
The notation distinguishes between deterministic and probabilistic connections via the line style of network edges. Edges between two nodes representing individual units are usually deterministic.

*Deterministic*

.. grid:: 2
	
	.. grid-item::
		:columns: 1
		
		.. image:: /_static/img/screenshots/network/EdgeDeterministic.png
	
	.. grid-item::
		:columns: 11
		
		Deterministic connections, depicted by a solid line edge, define exactly which units belonging to connected nodes are themselves connected.

*Probabilistic*

.. grid:: 2
	
	.. grid-item::
		:columns: 1
		
		.. image:: /_static/img/screenshots/network/EdgeProbabilistic.png
	
	.. grid-item::
		:columns: 11
		
		Probabilistic connections, depicted by a dashed-line edge, are constructed by connecting individual neurons from source and target populations according to probabilistic rules..


Edge type
---------
Analogously to the node type, the edge type emphasizes a defining property of the connection by specific choices of arrowheads.
The edge types given here can be used for connections between all node types.


*Generic edge*

.. grid:: 2
	
	.. grid-item::
		:columns: 1
		
		.. image:: /_static/img/screenshots/network/EdgeTypeGeneric.png
		
	.. grid-item::
		:columns: 11
	
		A generic edge, represented by a classical (or straight barb) arrowhead, is used if the specific edge types do not apply or the corresponding properties are not intended to be emphasized.
		
*Excitatory edge*

.. grid:: 2
	
	.. grid-item::
		:columns: 1
		
		.. image:: /_static/img/screenshots/network/EdgeTypeExcitatory.png
		
	.. grid-item::
		:columns: 11
	
		An excitatory edge, depicted by a triangle arrowhead, is used if the effect on targets is excitatory.

*Inhibitory edge*

.. grid:: 2
	
	.. grid-item::
		:columns: 1
		
		.. image:: /_static/img/screenshots/network/EdgeTypeInhibitory.png
		
	.. grid-item::
		:columns: 11
		
		An inhibitory edge, depicted by a filled circle tip, is used if the effect on targets is inhibitory.


Directionality
--------------
*Unidirectional*

.. grid:: 2
	
	.. grid-item::
		:columns: 1
		
		.. image:: /_static/img/screenshots/network/EdgeUnidirectional.png
		
	.. grid-item::
		:columns: 11

		Unidirectional connections are depicted with a tip at the target node's end of the edge.

*Bidirectional*

.. grid:: 2
	
	.. grid-item::
		:columns: 1
		
		.. image:: /_static/img/screenshots/network/EdgeBidirectional.png
		
	.. grid-item::
		:columns: 11
		
		Bidirectional connections are symmetric in terms of the existence of connections and their parameterization. Such connections are depicted with edges having tips on both ends. If the same units are connected but parameters for forward and backward connections are not identical, two separate unidirectional edges should be used instead.

Edge color
----------

In NEST Desktop, the edge color is determined by the color of the source node.

|br|

.. _annotation:

Annotation
==========

Network edges can be annotated with information about the connection or projection they represent. Details on the rule specifying the existence of connections and their parameterization may be put along the arrow.

Annotations are currently not implemented in NEST Desktop.

Connectivity concept
--------------------
The properties in this category further specify the presence or absence of connections between units within the connected nodes.

Concept
-------
.. image:: /_static/img/network_model/concept.png
	:align: right
	:width: 300px
	
The definitions and symbols given in the connectivity concepts defined in [1]_ (for a permanent reference) and in the `Connection management <https://nest-simulator.readthedocs.io/en/latest/synapses/connection_management.html#connection-management>`_ (for a living reference) are the basis for this property.

Constraint
----------
.. image:: /_static/img/network_model/constraint.png
	:align: right
	:width: 300px
	
Specific constraint or exception to the connectivity concept.

|	*Autapses allowed*
|	Autapses are self-connections. The letter :math:`A` indicates if they are allowed.
|	
|	*Multapses allowed*
|	Multapses are multiple connections between the same pair of units and in the same direction. The letter :math:`M` indicates if they are allowed.
|	
|	*Prohibited*
|	The symbol of a constraint struck out reverses allowed to prohibited. E.g., autapses and multapses are prohibited: :math:`\cancel{A}`, :math:`\cancel{M}`.



Parameterization
---------------------------
.. image:: /_static/img/network_model/parameterization.png
	:align: right
	:width: 300px

Properties of the parameterization of connections, e.g., of weights :math:`w` and delays :math:`d`, can be expressed with mathematical notation.

|	*Constant parameter*
|	A parameter, e.g., a weight, which takes on the same value for all individual connections is indicated by an overline: :math:`\bar{w}`. 
|	
|	*Distributed parameter*
|	A tilde between a parameter (e.g., the weight) and a distribution indicates that individual parameter values are sampled from the distribution: :math:`w` ~ :math:`\mathcal{D}`. This example uses :math:`\mathcal{D}` for a generic distribution, but specific distributions, such as a normal distribution denoted by :math:`\mathcal{N}`, are also possible.

Further specification
---------------------

.. image:: /_static/img/network_model/furtherSpecification.png
	:align: right
	:width: 300px
	
Annotations for both the connectivity concept and the parameterization of connections can be specified further.
		
|	*Functional dependence*
|	Functional dependence on a parameter is expressed with parentheses, here indicated with a generic function :math:`f`. Common use cases are the dependence on the inter-unit distance :math:`r` or on time :math:`t`. Connections drawn with a distance-dependent profile can be indicated with :math:`f(r)`. The exact function :math:`f` used should be defined close to the diagram; already defined concepts such as a spatially modulated pairwise Bernoulli connection probability can also be used: :math:`p(r)`. Another example for a distance-dependent parameter could be a delay :math:`d(r)`. Plastic networks, in which the weights change with time, can be indicated with :math:`w(t)`.


For a discussion on customization and extension see [1]_.


|br|

.. _example:

Example
===========

.. grid:: 2

	.. grid-item::	Graphical notation
		:columns: 6
	
		.. image:: /_static/img/network_model/example_2.png


	.. grid-item::	NEST Desktop
		:columns: 6
	
		.. image:: /_static/img/network_model/example.png


The example is a balanced random network model with the random, fixed in-degree connectivity. The illustration uses the elements for nodes, edges, and annotations introduced above to depict the network composed of an excitatory (E, triangle) and an inhibitory (I, circle) neuron population, and a population of external stimulating devices (:math:`E_\text{ext}`, hexagon). Recurrent connections between the neurons in the excitatory and inhibitory populations are probabilistic (dashed edges) and follow the "random, fixed in-degree" rule (:math:`K_{in}`) with the further constraints that autapses are prohibited (:math:`\cancel{A}`) and multapses are allowed (:math:`M`).

Here, the NEST Desktop version also displays spike recorders.
For further information see  `spike activity <https://nest-desktop.readthedocs.io/en/latest/user/usage-advance/activity-animation-graph.html>`_.

Note that :ref:`annotations <annotation>` are currently not available in NEST Desktop.

Further examples can be found in [1]_.

References
----------
.. [1] Senk J, Kriener B, Djurfeldt M, Voges N, Jiang HJ, et al. (2022) Connectivity concepts in neuronal network modeling. PLOS Computational Biology 18(9): e1010086. https://doi.org/10.1371/journal.pcbi.1010086







