# gc-select-archived

## Introduction

This is a Chrome extension that adds a button to a bookmarks list page,
allowing you to select all the archived caches for bulk deletion from the list.
Implementation details aside, it does the same thing as
[clean\_ignore\_list](https://github.com/mortonfox/clean_ignore_list).

## Background

If you use the ignore list on the geocaching website, eventually caches in the
list will get archived and the ignore list will start filling up with archived
caches. If you'd like to bulk delete those archived caches and selecting them
by hand is too much of a bother, this browser extension will help.

## Installation

git clone this repository to your local disk or download the zip file and extract.

Go to the Chrome extensions page (chrome://extensions). You'll need to enable
developer mode in order to load an unpacked extension.

Click on "Load unpacked extension" and navigate to the folder in which you
cloned or extracted the source files. Select this folder to load the extension.

## Usage

Go to the Geocaching [List
Management](https://www.geocaching.com/my/lists.aspx) page and click on the
"Ignore List" link.

Below the list of bookmarks, you'll see a new button "Select All Archived".
Clicking on this button will check the checkbox for any archived cache in the
bookmarks list. Then you can click on the "Bulk Delete" button to get rid of
those bookmarks. Easy!

Note: If your bookmarks list is long enough to span multiple pages, you'll need
to either increase the number of bookmarks per page or you'll need to "select
all archived" and bulk delete on each page. The "select all archived" button
selects archived caches only on the current page.


