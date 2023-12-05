.. _libreoffice_extension:

LibreOffice extension for the graphical notation
================================================

This gallery tool for LibreOffice simplifies the process of creating static publication-ready network graphs.
Users can compose networks by dragging and dropping pre-defined nodes and edges.

You can download the extension here:

.. button-link:: https://extensions.libreoffice.org/de/extensions/show/42006
	:color: primary
	:align: center
	:shadow:
	
	Download

Installation and settings
-------------------------


To use the Graphical Notation extension in LibreOffice, download the extension and install it with a double-click. Once installed, access the gallery by going to "Insert" - "Media" - "Gallery". On the right side you can click on
the gallery icon (:octicon:`image;1em;`) and go to "Graphical Notation".

.. image:: /_static/img/screenshots/network/installation.png
   :align: center
   
|br|

How to use
----------

To utilize the various components, drag them onto the workspace. To establish a connection between nodes, drag the desired edge onto the workspace and connect the start and end points to the desired node.

.. image:: /_static/img/screenshots/network/how-to-use.png
   :align: center
	
|br|

**Tip:** If you select an object, you can change the color and line thickness under "Properties". (Shortcut: Ctrl + Alt + 1) 

Annotation
----------

Annotations of edges are best realized with the LibreOffice extension `TexMaths <https://extensions.libreoffice.org/en/extensions/show/texmaths-1>`_. This tool facilitates easy insertion of correct annotations through the following abbreviations defined in NEST's `Connection management <https://nest-simulator--2992.org.readthedocs.build/en/2992/synapses/connection_management.html#connection-management>`_.

.. image:: /_static/img/screenshots/network/annotations.png
   :align: center
   
|br|

By clicking on “LaTeX” in the bottom right you can add the annotation to the workspace. For "prohibited", you need to add 
`\usepackage{cancel}` to the preamble in the LaTeX extension. Here are some annotations with the right LaTeX code based on the graphical notation for the following connection rules:



.. grid:: 2


    .. grid-item::
	:columns: 4

        One-to-one:

    .. grid-item::

        ::
		
			\delta

    .. grid-item::
	:columns: 4
	
        All-to-all:

    .. grid-item::

        ::
		
			\Omega

    .. grid-item::
	:columns: 4
	
        Random, fixed in-degree:

    .. grid-item::

        ::
		
			K_\mathrm{in}			

    .. grid-item::
	:columns: 4
	
        Random, fixed out-degree:

    .. grid-item::

        ::
		
			K_\mathrm{out}			

    .. grid-item::
	:columns: 4
	
        Random, fixed total number:

    .. grid-item::

        ::
		
			K_\mathrm{syn}			

    .. grid-item::
	:columns: 4
	
		Pairwise Bernoulli:
	
    .. grid-item::

        ::
		
			p	

    .. grid-item::
	:columns: 4
	
        Explicit:

    .. grid-item::

        ::
		
			X			
	
    .. grid-item::
	:columns: 4
	
        Prohibited:

    .. grid-item::

        ::
		
			\cancel{A}	
	
    .. grid-item::
	:columns: 4
	
        Constant paramter:

    .. grid-item::

        ::
		
			\overline{w}
			
    .. grid-item::
	:columns: 4
	
        Distributed paramter:

    .. grid-item::

        ::
		
			w $\sim$ D

To edit an annotation, select the annotation to be edited and then click on "LaTeX" in the top right-hand corner. There you have the possibility to edit the code again. 

**Tip:** If you go to the "Arrays" tab, you can simply select the 2x1 array and write the formulas on top of each other.

Save
----
The best way to save the file is to click on "File" and then on "Export...", there you can select the desired file type and click on "Export".
We suggest to save in the native text-based .fodg format and export as vector graphics (.eps or .svg) if needed.

Development
-----------
If you want to add your own symbols, for example for nodes or edges, you can just hold the symbol which you want to add and drag it into the gallery. You can find more information about it on: https://wiki.documentfoundation.org/The_Gallery_LibreOffice
