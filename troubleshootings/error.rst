.. _error-server-not-found:

Server not found
----------------

NEST Desktop cannot find the NEST Simulator.
It has two possible reasons:

- NEST Desktop has a wrong URL under which it tries to contact the server.
  (|see| the :doc:`FAQ for NEST Simulator </troubleshootings/nest-simulator>`.)

- NEST Server is not running. Try to (re-)start NEST Server.

- Use simulation service (e.g. on EBRAINS):
  The user authorization to the backend might be not granted.

.. hint::
   Check NEST Server is running (if the URL is ``localhost:52425``):

   - in URL of Browser: ``http://localhost:52425``
   - in Terminal: ``curl http://localhost:52425``
   - in Python: ``import requests; requests.get('http://localhost:52425')``

.. _error-internal-server-error:

Internal server error
---------------------

It says that the back end (i.e, ``nest-server``) ended with an internal error.
In this case, you have to review the log of the back end.

.. _error-nest-error:

NEST error
----------

NEST Simulator produces a value error, e.g. ``The value must be strictly negative.``.
Please have a look at the official :doc:`NEST documentation <nest-simulator:index>`
to obtain the correct syntax for the commands.


.. |see| image:: /_static/img/icons/arrow-right.svg
   :alt: See
   :height: 17.6px
   :target: #

.. _problem-with-firefox-private-mode:

Firefox private mode problems
-----------------------------

When NEST Desktop is opened in a private window in Firefox,
only a blank screen is shown. This is due to an internal
configuration in Firefox. If you are a very experienced user,
you might have have a look at
`the official issue <https://bugzilla.mozilla.org/show_bug.cgi?id=1639542#c9>`__
for more information - but please keep in mind that the preliminary
workaround mentioned there might result in your Firefox leaking
data in private mode!
For any other users, please use the normal mode in Firefox
(and just `cleanup the cookies <https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox>`__
afterwards) or use another browser, if you really need to
use the private mode.
