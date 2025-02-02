;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    113: function (t, e, r) {
      var content = r(174)
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals)
      ;(0, r(19).default)("4f881bc6", content, !0, { sourceMap: !1 })
    },
    114: function (t, e, r) {
      t.exports = r.p + "img/vuemmerce-logo.6809a10.png"
    },
    115: function (t, e, r) {
      var content = r(177)
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals)
      ;(0, r(19).default)("34607d23", content, !0, { sourceMap: !1 })
    },
    116: function (t, e, r) {
      var content = r(179)
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals)
      ;(0, r(19).default)("90c7d59e", content, !0, { sourceMap: !1 })
    },
    117: function (t, e, r) {
      var content = r(181)
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals)
      ;(0, r(19).default)("ea108fb0", content, !0, { sourceMap: !1 })
    },
    118: function (t, e, r) {
      var content = r(183)
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals)
      ;(0, r(19).default)("8bc69f62", content, !0, { sourceMap: !1 })
    },
    119: function (t, e, r) {
      var content = r(185)
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals)
      ;(0, r(19).default)("359d3852", content, !0, { sourceMap: !1 })
    },
    125: function (t, e, r) {
      "use strict"
      var o = {
          name: "VmHeader",
          data: function () {
            return {
              isCheckoutActive: !1,
              showDropdown: !1,
              logoutLabel: "Log out",
              loginLabel: "Log in",
              signupLabel: "Sign up",
              wishlistLabel: "Wishlist"
            }
          },
          computed: {
            numProductsAdded: function () {
              return this.$store.getters.productsAdded.length
            },
            isUserLoggedIn: function () {
              return this.$store.getters.isUserLoggedIn
            },
            getUserName: function () {
              var t = this.$store.getters.getUserName
              return "" === t ? "user" : t
            }
          },
          mounted: function () {
            window.addEventListener("blur", this.closeDropdown, !0)
          },
          destroyed: function () {
            window.removeEventListener("blur", this.closeDropdown)
          },
          methods: {
            closeDropdown: function () {
              var t = this
              setTimeout(function () {
                t.showDropdown = !1
              }, 100)
            },
            showCheckoutModal: function () {
              this.$store.commit("showCheckoutModal", !0)
            },
            showLoginModal: function () {
              this.$store.commit("showLoginModal", !0)
            },
            showSignupModal: function () {
              this.$store.commit("showSignupModal", !0)
            },
            onShowDropdown: function () {
              this.showDropdown = !this.showDropdown
            },
            logout: function () {
              this.$store.commit("isUserLoggedIn", !1),
                this.$store.commit("isUserSignedUp", !1),
                this.$store.commit("removeProductsFromFavourite"),
                this.$router.push({ name: "index" })
            }
          }
        },
        n = (r(173), r(6)),
        l = Object(n.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e
            return r(
              "nav",
              {
                staticClass: "flex justify-between sticky top-0 bg-white z-10 shadow-md px-3",
                attrs: { role: "navigation", "aria-label": "main navigation" }
              },
              [
                r("nuxt-link", { staticClass: "navbar-item", attrs: { to: { name: "index" } } }, [
                  r("h1", { staticClass: "title w-40 h-12" })
                ]),
                t._v(" "),
                r("div", { staticClass: "flex items-center" }, [
                  r("div", { staticClass: "mx-2" }, [
                    r("div", { staticClass: "cursor-pointer", on: { click: t.showCheckoutModal } }, [
                      r("span", { class: [t.numProductsAdded > 0 ? "p-2 bg-blue text-white rounded-md" : ""] }, [
                        t._v(t._s(t.numProductsAdded))
                      ]),
                      t._v(" "),
                      t._m(0)
                    ])
                  ]),
                  t._v(" "),
                  r("div", { staticClass: "mx-2" }, [
                    t.isUserLoggedIn ? t._e() : r("button", { on: { click: t.onShowDropdown } }, [t._m(1)]),
                    t._v(" "),
                    t.isUserLoggedIn
                      ? r("button", { staticClass: "cursor-pointer", on: { click: t.onShowDropdown } }, [
                          t._v("\n        Welcome " + t._s(t.getUserName) + "\n      ")
                        ])
                      : t._e(),
                    t._v(" "),
                    t.showDropdown && t.isUserLoggedIn
                      ? r(
                          "div",
                          { staticClass: "dropdown w-52 h-28" },
                          [
                            r(
                              "nuxt-link",
                              { staticClass: "button text-center", attrs: { to: { name: "user-wishlist" } } },
                              [r("span", { staticClass: "text-lg" }, [t._v(t._s(t.wishlistLabel))])]
                            ),
                            t._v(" "),
                            r("button", { staticClass: "button", on: { click: t.logout } }, [
                              r("span", { staticClass: "text-lg" }, [t._v(t._s(t.logoutLabel))])
                            ])
                          ],
                          1
                        )
                      : t._e(),
                    t._v(" "),
                    t.showDropdown && !t.isUserLoggedIn
                      ? r("div", { staticClass: "dropdown" }, [
                          t.isUserLoggedIn
                            ? t._e()
                            : r("button", { staticClass: "button", on: { click: t.showLoginModal } }, [
                                r("span", { staticClass: "text-lg" }, [
                                  t._v("Already registered?"),
                                  r("br"),
                                  t._v(" " + t._s(t.loginLabel))
                                ]),
                                t._v(" "),
                                r("i", { staticClass: "fa fa-sign-in" })
                              ]),
                          t._v(" "),
                          t.isUserLoggedIn
                            ? t._e()
                            : r("button", { staticClass: "button", on: { click: t.showSignupModal } }, [
                                r("span", { staticClass: "text-lg" }, [
                                  t._v("New User?"),
                                  r("br"),
                                  t._v(" " + t._s(t.signupLabel))
                                ]),
                                t._v(" "),
                                r("i", { staticClass: "fa fa-user-plus" })
                              ])
                        ])
                      : t._e()
                  ])
                ])
              ],
              1
            )
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t
              return e("span", { staticClass: "icon" }, [e("i", { staticClass: "fa fa-shopping-cart" })])
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t
              return e("span", { staticClass: "icon" }, [e("i", { staticClass: "fa fa-user" })])
            }
          ],
          !1,
          null,
          "f893feac",
          null
        ).exports,
        d = { name: "VmFooter" },
        c =
          (r(176),
          Object(n.a)(
            d,
            function () {
              var t = this,
                e = t.$createElement,
                o = t._self._c || e
              return o("footer", { staticClass: "bg-blue_light p-5 lg:p-0" }, [
                o("div", { staticClass: "py-16 mx-auto sm:px-6 lg:px-8" }, [
                  o("div", { staticClass: "grid grid-cols-1 gap-8 lg:grid-cols-3" }, [
                    o("div", [
                      o("img", { staticClass: "mr-5 h-6 sm:h-9", attrs: { src: r(114), alt: "logo" } }),
                      t._v(" "),
                      o("p", { staticClass: "max-w-xs mt-4 text-sm text-gray-600" }, [
                        t._v(
                          "\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.\n        "
                        )
                      ]),
                      t._v(" "),
                      o("div", { staticClass: "flex mt-8 space-x-6 text-gray-600" }, [
                        o(
                          "a",
                          { staticClass: "hover:opacity-75", attrs: { href: "", target: "_blank", rel: "noreferrer" } },
                          [
                            o("span", { staticClass: "sr-only" }, [t._v(" Facebook ")]),
                            t._v(" "),
                            o(
                              "svg",
                              {
                                staticClass: "w-6 h-6",
                                attrs: { fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true" }
                              },
                              [
                                o("path", {
                                  attrs: {
                                    fillRule: "evenodd",
                                    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                                    clipRule: "evenodd"
                                  }
                                })
                              ]
                            )
                          ]
                        ),
                        t._v(" "),
                        o(
                          "a",
                          { staticClass: "hover:opacity-75", attrs: { href: "", target: "_blank", rel: "noreferrer" } },
                          [
                            o("span", { staticClass: "sr-only" }, [t._v(" Instagram ")]),
                            t._v(" "),
                            o(
                              "svg",
                              {
                                staticClass: "w-6 h-6",
                                attrs: { fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true" }
                              },
                              [
                                o("path", {
                                  attrs: {
                                    fillRule: "evenodd",
                                    d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                                    clipRule: "evenodd"
                                  }
                                })
                              ]
                            )
                          ]
                        ),
                        t._v(" "),
                        o(
                          "a",
                          { staticClass: "hover:opacity-75", attrs: { href: "", target: "_blank", rel: "noreferrer" } },
                          [
                            o("span", { staticClass: "sr-only" }, [t._v(" Twitter ")]),
                            t._v(" "),
                            o(
                              "svg",
                              {
                                staticClass: "w-6 h-6",
                                attrs: { fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true" }
                              },
                              [
                                o("path", {
                                  attrs: {
                                    d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ])
                    ]),
                    t._v(" "),
                    t._m(0)
                  ]),
                  t._v(" "),
                  o("p", { staticClass: "mt-8 text-xs text-gray-800" }, [t._v("\n      © 2022 Comany Name\n    ")])
                ])
              ])
            },
            [
              function () {
                var t = this,
                  e = t.$createElement,
                  r = t._self._c || e
                return r("div", { staticClass: "grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4" }, [
                  r("div", [
                    r("p", { staticClass: "font-medium" }, [t._v("\n            Company\n          ")]),
                    t._v(" "),
                    r("nav", { staticClass: "flex flex-col mt-4 space-y-2 text-sm text-gray-500" }, [
                      r("a", { staticClass: "link", attrs: { href: "#" } }, [t._v("About")]),
                      t._v(" "),
                      r("a", { staticClass: "link", attrs: { href: "#" } }, [t._v("Meet the Team")]),
                      t._v(" "),
                      r("a", { staticClass: "link", attrs: { href: "#" } }, [t._v("History")]),
                      t._v(" "),
                      r("a", { staticClass: "link", attrs: { href: "#" } }, [t._v("Careers")])
                    ])
                  ]),
                  t._v(" "),
                  r("div", [
                    r("p", { staticClass: "font-medium" }, [t._v("\n            Services\n          ")]),
                    t._v(" "),
                    r("nav", { staticClass: "flex flex-col mt-4 space-y-2 text-sm text-gray-500" }, [
                      r("a", { staticClass: "link", attrs: { href: "#" } }, [t._v("1on1 Coaching")]),
                      t._v(" "),
                      r("a", { staticClass: "link", attrs: { href: "#" } }, [t._v("Company Review")]),
                      t._v(" "),
                      r("a", { staticClass: "link", attrs: { href: "#" } }, [t._v("Accounts Review")]),
                      t._v(" "),
                      r("a", { staticClass: "link", attrs: { href: "#" } }, [t._v("HR Consulting")]),
                      t._v(" "),
                      r("a", { staticClass: "link", attrs: { href: "#" } }, [t._v("SEO Optimisation")])
                    ])
                  ]),
                  t._v(" "),
                  r("div", [
                    r("p", { staticClass: "font-medium" }, [t._v("\n            Helpful Links\n          ")]),
                    t._v(" "),
                    r("nav", { staticClass: "flex flex-col mt-4 space-y-2 text-sm text-gray-500" }, [
                      r("a", { staticClass: "link", attrs: { href: "#" } }, [t._v("Contact")]),
                      t._v(" "),
                      r("a", { staticClass: "link", attrs: { href: "#" } }, [t._v("FAQs")]),
                      t._v(" "),
                      r("a", { staticClass: "link", attrs: { href: "#" } }, [t._v("Live Chat")])
                    ])
                  ]),
                  t._v(" "),
                  r("div", [
                    r("p", { staticClass: "font-medium" }, [t._v("\n            Legal\n          ")]),
                    t._v(" "),
                    r("nav", { staticClass: "flex flex-col mt-4 space-y-2 text-sm text-gray-500" }, [
                      r("a", { staticClass: "link", attrs: { href: "#" } }, [t._v("Privacy Policy")]),
                      t._v(" "),
                      r("a", { staticClass: "link", attrs: { href: "#" } }, [t._v("Terms & Conditions")]),
                      t._v(" "),
                      r("a", { staticClass: "link", attrs: { href: "#" } }, [t._v("Returns Policy")]),
                      t._v(" "),
                      r("a", { staticClass: "link", attrs: { href: "#" } }, [t._v("Accessibility")])
                    ])
                  ])
                ])
              }
            ],
            !1,
            null,
            "6e51293b",
            null
          ).exports)
      function h(t) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          t
        )
      }
      var m = {
          name: "login",
          data: function () {
            return {
              modalTitle: "Log in",
              modalTitleLoggedIn: "Welcome!",
              loginBtnLabel: "Log in",
              emailRequiredLabel: "Email required",
              passwordRequiredLabel: "Password required",
              emailNotValidLabel: "Valid email required",
              btnLoggedInLabel: "Close",
              email: "",
              password: "",
              highlightEmailWithError: null,
              highlightPasswordWithError: null,
              isFormSuccess: !1
            }
          },
          computed: {
            isUserLoggedIn: function () {
              return this.$store.getters.isUserLoggedIn
            },
            openModal: function () {
              return !!this.$store.getters.isLoginModalOpen
            }
          },
          methods: {
            closeModal: function () {
              this.$store.commit("showLoginModal", !1)
            },
            checkForm: function (t) {
              t.preventDefault(),
                this.email &&
                  this.password &&
                  ((this.highlightEmailWithError = !1),
                  (this.highlightPasswordWithError = !1),
                  (this.isFormSuccess = !0),
                  this.$store.commit("isUserLoggedIn", this.isFormSuccess)),
                this.email
                  ? (this.highlightEmailWithError = !1)
                  : ((this.highlightEmailWithError = !0),
                    this.email && !h(this.email) && (this.emailRequiredLabel = this.emailNotValidLabel)),
                this.password ? (this.highlightPasswordWithError = !1) : (this.highlightPasswordWithError = !0)
            },
            checkEmailOnKeyUp: function (t) {
              t && h(t)
                ? (this.highlightEmailWithError = !1)
                : ((this.highlightEmailWithError = !0), h(t) || (this.emailRequiredLabel = this.emailNotValidLabel))
            },
            checkPasswordOnKeyUp: function (t) {
              this.highlightPasswordWithError = !t
            }
          }
        },
        f =
          (r(178),
          Object(n.a)(
            m,
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e
              return r("div", { class: [t.openModal ? "fixed flex" : "hidden", "modal"] }, [
                r("div", { staticClass: "modal-background" }),
                t._v(" "),
                r("div", { staticClass: "modal-wrapper" }, [
                  r("div", { staticClass: "bg-grey_light flex items-center justify-between rounded-t-2xl p-5" }, [
                    t.isUserLoggedIn ? t._e() : r("p", { staticClass: "text-xl" }, [t._v(t._s(t.modalTitle))]),
                    t._v(" "),
                    t.isUserLoggedIn ? r("p", { staticClass: "text-xl" }, [t._v(t._s(t.modalTitleLoggedIn))]) : t._e(),
                    t._v(" "),
                    r(
                      "button",
                      { staticClass: "delete", attrs: { "aria-label": "close" }, on: { click: t.closeModal } },
                      [t._v("X")]
                    )
                  ]),
                  t._v(" "),
                  r("form", { attrs: { action: "#", method: "post" }, on: { submit: t.checkForm } }, [
                    r("section", { staticClass: "p-5 rounded-b-2xl" }, [
                      t.isUserLoggedIn
                        ? t._e()
                        : r("div", [
                            r("div", { staticClass: "m-4" }, [
                              r("input", {
                                directives: [
                                  { name: "model", rawName: "v-model", value: t.email, expression: "email" }
                                ],
                                class: [t.highlightEmailWithError ? "input border-red" : "input"],
                                attrs: { type: "email", placeholder: "youremail@email.com", name: "emailName" },
                                domProps: { value: t.email },
                                on: {
                                  keyup: function (e) {
                                    return t.checkEmailOnKeyUp(t.email)
                                  },
                                  input: function (e) {
                                    e.target.composing || (t.email = e.target.value)
                                  }
                                }
                              }),
                              t._v(" "),
                              t.highlightEmailWithError
                                ? r("p", { staticClass: "text-red" }, [t._v(t._s(t.emailRequiredLabel))])
                                : t._e()
                            ]),
                            t._v(" "),
                            r("div", { staticClass: "m-4" }, [
                              r("input", {
                                directives: [
                                  { name: "model", rawName: "v-model", value: t.password, expression: "password" }
                                ],
                                class: [t.highlightPasswordWithError ? "input border-red" : "input"],
                                attrs: { type: "password", placeholder: "********", name: "passwordName" },
                                domProps: { value: t.password },
                                on: {
                                  keyup: function (e) {
                                    return t.checkPasswordOnKeyUp(t.password)
                                  },
                                  input: function (e) {
                                    e.target.composing || (t.password = e.target.value)
                                  }
                                }
                              }),
                              t._v(" "),
                              t.highlightPasswordWithError
                                ? r("p", { staticClass: "text-red" }, [t._v(t._s(t.passwordRequiredLabel))])
                                : t._e()
                            ])
                          ]),
                      t._v(" "),
                      t.isUserLoggedIn ? r("div", { staticClass: "level" }, [t._m(0)]) : t._e(),
                      t._v(" "),
                      r("div", { staticClass: "m-4" }, [
                        t.isUserLoggedIn
                          ? t._e()
                          : r(
                              "button",
                              { staticClass: "rounded-xl p-3 bg-blue text-white w-full", attrs: { type: "submit" } },
                              [t._v(t._s(t.loginBtnLabel))]
                            ),
                        t._v(" "),
                        t.isUserLoggedIn
                          ? r(
                              "button",
                              {
                                staticClass: "rounded-xl p-3 bg-grey_light text-grey_dark",
                                attrs: { type: "button" },
                                on: { click: t.closeModal }
                              },
                              [t._v(t._s(t.btnLoggedInLabel))]
                            )
                          : t._e()
                      ])
                    ])
                  ])
                ])
              ])
            },
            [
              function () {
                var t = this,
                  e = t.$createElement,
                  r = t._self._c || e
                return r("div", { staticClass: "text-center" }, [
                  r("div", [
                    r("p", { staticClass: "title" }, [t._v("Welcome back!")]),
                    t._v(" "),
                    r("p", { staticClass: "heading" }, [t._v("Now you are logged in")])
                  ])
                ])
              }
            ],
            !1,
            null,
            null,
            null
          ).exports),
        w =
          (r(16),
          {
            name: "signup",
            data: function () {
              return {
                modalTitle: "Sign up",
                modalTitleRegistered: "Welcome ",
                primaryBtnLabel: "Sign up",
                btnRegisteredLabel: "Close",
                notEqualErrorLabel: "Passwords must be equal",
                passwordErrorLabel: "Password required",
                nameErrorLabel: "Name required",
                emailErrorLabel: "Email required",
                emailNotValidLabel: "Valid email required",
                name: "",
                email: "",
                password: "",
                repeatPassword: "",
                highlightNameWithError: null,
                highlightEmailWithError: null,
                highlightPasswordWithError: null,
                highlightRepeatPasswordWithError: null,
                isFormSuccess: !1
              }
            },
            computed: {
              isUserSignedUp: function () {
                return this.$store.getters.isUserSignedUp
              },
              openModal: function () {
                return !!this.$store.getters.isSignupModalOpen
              }
            },
            methods: {
              closeModal: function () {
                this.$store.commit("showSignupModal", !1)
              },
              checkForm: function (t) {
                t.preventDefault(),
                  this.name &&
                    this.email &&
                    this.password &&
                    this.repeatPassword &&
                    ((this.highlightEmailWithError = !1),
                    (this.highlightPasswordWithError = !1),
                    (this.isFormSuccess = !0),
                    this.$store.commit("setUserName", this.name),
                    this.$store.commit("isUserSignedUp", this.isFormSuccess),
                    this.$store.commit("isUserLoggedIn", this.isFormSuccess)),
                  this.name ? (this.highlightNameWithError = !1) : (this.highlightNameWithError = !0),
                  this.email
                    ? (this.highlightEmailWithError = !1)
                    : ((this.highlightEmailWithError = !0),
                      this.email && !h(this.email) && (this.emailErrorLabel = this.emailNotValidLabel)),
                  this.password ? (this.highlightPasswordWithError = !1) : (this.highlightPasswordWithError = !0),
                  this.repeatPassword
                    ? (this.highlightRepeatPasswordWithError = !1)
                    : (this.highlightRepeatPasswordWithError = !0)
              },
              checkNameOnKeyUp: function (t) {
                this.highlightNameWithError = !t
              },
              checkEmailOnKeyUp: function (t) {
                t && h(t)
                  ? (this.highlightEmailWithError = !1)
                  : ((this.highlightEmailWithError = !0), h(t) || (this.emailErrorLabel = this.emailNotValidLabel))
              },
              checkPasswordOnKeyUp: function (t) {
                t
                  ? ((this.highlightPasswordWithError = !1),
                    this.repeatPassword === this.password
                      ? (this.highlightRepeatPasswordWithError = !1)
                      : (this.highlightRepeatPasswordWithError = !0))
                  : (this.highlightPasswordWithError = !0)
              },
              checkRepeatPasswordOnKeyUp: function (t) {
                t && t === this.password
                  ? (this.highlightRepeatPasswordWithError = !1)
                  : (this.highlightRepeatPasswordWithError = !0)
              }
            }
          }),
        v =
          (r(180),
          Object(n.a)(
            w,
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e
              return r("div", { class: [t.openModal ? "fixed flex" : "hidden", "modal"] }, [
                r("div", { staticClass: "modal-background" }),
                t._v(" "),
                r("div", { staticClass: "modal-wrapper" }, [
                  r("div", { staticClass: "bg-grey_light flex items-center justify-between rounded-t-2xl p-5" }, [
                    t.isUserSignedUp ? t._e() : r("p", { staticClass: "text-xl" }, [t._v(t._s(t.modalTitle))]),
                    t._v(" "),
                    t.isUserSignedUp
                      ? r("p", { staticClass: "text-xl" }, [t._v(t._s(t.modalTitleRegistered))])
                      : t._e(),
                    t._v(" "),
                    r(
                      "button",
                      { staticClass: "delete", attrs: { "aria-label": "close" }, on: { click: t.closeModal } },
                      [t._v("X")]
                    )
                  ]),
                  t._v(" "),
                  r("form", { attrs: { action: "#", method: "post" }, on: { submit: t.checkForm } }, [
                    r("section", { staticClass: "p-5 rounded-b-2xl" }, [
                      t.isUserSignedUp
                        ? t._e()
                        : r("div", [
                            r("div", { staticClass: "m-4" }, [
                              r("input", {
                                directives: [{ name: "model", rawName: "v-model", value: t.name, expression: "name" }],
                                class: [t.highlightNameWithError ? "input border-red" : "input"],
                                attrs: { type: "text", placeholder: "Your Name" },
                                domProps: { value: t.name },
                                on: {
                                  keyup: function (e) {
                                    return t.checkNameOnKeyUp(t.name)
                                  },
                                  input: function (e) {
                                    e.target.composing || (t.name = e.target.value)
                                  }
                                }
                              }),
                              t._v(" "),
                              t.highlightNameWithError
                                ? r("p", { staticClass: "help text-red" }, [t._v(t._s(t.nameErrorLabel))])
                                : t._e()
                            ]),
                            t._v(" "),
                            r("div", { staticClass: "m-4" }, [
                              r("input", {
                                directives: [
                                  { name: "model", rawName: "v-model", value: t.email, expression: "email" }
                                ],
                                class: [t.highlightEmailWithError ? "input border-red" : "input"],
                                attrs: { type: "email", placeholder: "youremail@email.com", name: "emailName" },
                                domProps: { value: t.email },
                                on: {
                                  keyup: function (e) {
                                    return t.checkEmailOnKeyUp(t.email)
                                  },
                                  input: function (e) {
                                    e.target.composing || (t.email = e.target.value)
                                  }
                                }
                              }),
                              t._v(" "),
                              t.highlightEmailWithError
                                ? r("p", { staticClass: "help text-red" }, [t._v(t._s(t.emailErrorLabel))])
                                : t._e()
                            ]),
                            t._v(" "),
                            r("div", { staticClass: "m-4" }, [
                              r("input", {
                                directives: [
                                  { name: "model", rawName: "v-model", value: t.password, expression: "password" }
                                ],
                                class: [t.highlightPasswordWithError ? "input border-red" : "input"],
                                attrs: { type: "password", placeholder: "********" },
                                domProps: { value: t.password },
                                on: {
                                  keyup: function (e) {
                                    return t.checkPasswordOnKeyUp(t.password)
                                  },
                                  input: function (e) {
                                    e.target.composing || (t.password = e.target.value)
                                  }
                                }
                              }),
                              t._v(" "),
                              t.highlightPasswordWithError
                                ? r("p", { staticClass: "help text-red" }, [t._v(t._s(t.passwordErrorLabel))])
                                : t._e()
                            ]),
                            t._v(" "),
                            r("div", { staticClass: "m-4" }, [
                              r("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.repeatPassword,
                                    expression: "repeatPassword"
                                  }
                                ],
                                class: [t.highlightRepeatPasswordWithError ? "input border-red" : "input"],
                                attrs: { type: "password", placeholder: "********" },
                                domProps: { value: t.repeatPassword },
                                on: {
                                  keyup: function (e) {
                                    return t.checkRepeatPasswordOnKeyUp(t.repeatPassword)
                                  },
                                  input: function (e) {
                                    e.target.composing || (t.repeatPassword = e.target.value)
                                  }
                                }
                              }),
                              t._v(" "),
                              t.highlightRepeatPasswordWithError
                                ? r("p", { staticClass: "help text-red" }, [t._v(t._s(t.notEqualErrorLabel))])
                                : t._e()
                            ])
                          ]),
                      t._v(" "),
                      t.isUserSignedUp
                        ? r("div", [
                            r("div", { staticClass: "text-center" }, [
                              r("div", [
                                r("p", { staticClass: "text-4xl" }, [t._v("Welcome " + t._s(t.name) + "!")]),
                                t._v(" "),
                                r("p", { staticClass: "text-2xl" }, [t._v("Now you are a member")])
                              ])
                            ])
                          ])
                        : t._e()
                    ]),
                    t._v(" "),
                    r("div", { staticClass: "m-4" }, [
                      t.isUserSignedUp
                        ? t._e()
                        : r("button", { staticClass: "rounded-xl p-3 bg-blue text-white w-full" }, [
                            t._v(t._s(t.primaryBtnLabel))
                          ]),
                      t._v(" "),
                      t.isUserSignedUp
                        ? r(
                            "button",
                            {
                              staticClass: "rounded-xl p-3 bg-grey_light text-grey_dark",
                              attrs: { type: "button" },
                              on: { click: t.closeModal }
                            },
                            [t._v(t._s(t.btnRegisteredLabel))]
                          )
                        : t._e()
                    ])
                  ])
                ])
              ])
            },
            [],
            !1,
            null,
            "3d4deb5c",
            null
          ).exports),
        x = {
          name: "checkout",
          data: function () {
            return {
              modalTitle: "Checkout",
              removeLabel: "Remove from cart",
              cartEmptyLabel: "Your cart is empty",
              closeLabel: "Close",
              isCheckoutSection: !1
            }
          },
          computed: {
            products: function () {
              return this.$store.getters.productsAdded
            },
            openModal: function () {
              return !!this.$store.getters.isCheckoutModalOpen
            },
            buyLabel: function () {
              var t,
                e = this.products.length,
                r = this.$store.getters.productsAdded,
                o = [],
                n = "",
                l = 1
              return (
                r.forEach(function (t) {
                  t.quantity >= 1 && (l = t.quantity), o.push(t.price * l)
                }),
                (t = o.reduce(function (a, b) {
                  return a + b
                }, 0)),
                (n = e > 1 ? "products" : "product"),
                "Buy ".concat(e, " ").concat(n, " at ").concat(t, "€")
              )
            },
            isUserLoggedIn: function () {
              return this.$store.getters.isUserLoggedIn
            }
          },
          methods: {
            closeModal: function (t) {
              this.$store.commit("showCheckoutModal", !1), t && window.location.reload()
            },
            removeFromCart: function (t) {
              var data = { id: t, status: !1 }
              this.$store.commit("removeFromCart", t), this.$store.commit("setAddedBtn", data)
            },
            onNextBtn: function () {
              this.isUserLoggedIn
                ? (this.isCheckoutSection = !0)
                : (this.$store.commit("showCheckoutModal", !1), this.$store.commit("showLoginModal", !0))
            },
            onPrevBtn: function () {
              this.isCheckoutSection = !1
            }
          }
        },
        y =
          (r(182),
          {
            components: {
              VmHeader: l,
              VmFooter: c,
              VmLoginModal: f,
              VmSignupModal: v,
              VmCheckoutModal: Object(n.a)(
                x,
                function () {
                  var t = this,
                    e = t.$createElement,
                    r = t._self._c || e
                  return r("div", { class: [t.openModal ? "fixed flex" : "hidden", "modal"] }, [
                    r("div", { staticClass: "modal-background" }),
                    t._v(" "),
                    r("div", { staticClass: "modal-wrapper" }, [
                      r("div", { staticClass: "bg-grey_light flex items-center justify-between rounded-t-2xl p-5" }, [
                        r("p", { staticClass: "text-xl" }, [t._v(t._s(t.modalTitle))]),
                        t._v(" "),
                        r(
                          "button",
                          {
                            staticClass: "delete",
                            attrs: { "aria-label": "close" },
                            on: {
                              click: function (e) {
                                return t.closeModal(!1)
                              }
                            }
                          },
                          [t._v("X")]
                        )
                      ]),
                      t._v(" "),
                      r("section", { staticClass: "p-5 rounded-b-2xl" }, [
                        t.isCheckoutSection
                          ? t._e()
                          : r(
                              "div",
                              [
                                t._l(t.products, function (e) {
                                  return r("div", { key: e.id, staticClass: "box" }, [
                                    r("div", [
                                      r("p", [
                                        t._v(
                                          t._s(e.title) +
                                            "  " +
                                            t._s(e.quantity > 0 ? " - Quantity: " + e.quantity : "")
                                        )
                                      ]),
                                      t._v(" "),
                                      r("p", [t._v(t._s(e.price) + " €")])
                                    ]),
                                    t._v(" "),
                                    r(
                                      "button",
                                      {
                                        staticClass: "rounded-xl p-3 text-white bg-red",
                                        on: {
                                          click: function (r) {
                                            return t.removeFromCart(e.id)
                                          }
                                        }
                                      },
                                      [t._v(t._s(t.removeLabel))]
                                    )
                                  ])
                                }),
                                t._v(" "),
                                0 === t.products.length ? r("div", [r("p", [t._v(t._s(t.cartEmptyLabel))])]) : t._e()
                              ],
                              2
                            ),
                        t._v(" "),
                        t.isCheckoutSection ? r("div", [r("p", [t._v("You bought it :-)")])]) : t._e()
                      ]),
                      t._v(" "),
                      r("div", { staticClass: "m-4" }, [
                        r(
                          "button",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: t.products.length > 0 && !t.isCheckoutSection,
                                expression: "products.length > 0 && !isCheckoutSection"
                              }
                            ],
                            staticClass: "rounded-xl p-3 bg-blue text-white w-full",
                            on: { click: t.onNextBtn }
                          },
                          [t._v(t._s(t.buyLabel))]
                        ),
                        t._v(" "),
                        t.isCheckoutSection
                          ? r(
                              "button",
                              {
                                staticClass: "rounded-xl p-3 bg-blue text-white w-full",
                                on: {
                                  click: function (e) {
                                    return t.closeModal(!0)
                                  }
                                }
                              },
                              [t._v(t._s(t.closeLabel))]
                            )
                          : t._e()
                      ])
                    ])
                  ])
                },
                [],
                !1,
                null,
                "4a2b29eb",
                null
              ).exports
            }
          }),
        _ =
          (r(184),
          Object(n.a)(
            y,
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e
              return r(
                "div",
                [
                  r("VmHeader"),
                  t._v(" "),
                  r(
                    "main",
                    [
                      r("nuxt"),
                      t._v(" "),
                      r("VmLoginModal"),
                      t._v(" "),
                      r("VmSignupModal"),
                      t._v(" "),
                      r("VmCheckoutModal")
                    ],
                    1
                  ),
                  t._v(" "),
                  r("VmFooter")
                ],
                1
              )
            },
            [],
            !1,
            null,
            null,
            null
          ))
      e.a = _.exports
    },
    126: function (t, e, r) {
      t.exports = r(127)
    },
    171: function (t, e, r) {
      var content = r(172)
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals)
      ;(0, r(19).default)("9d54a558", content, !0, { sourceMap: !1 })
    },
    172: function (t, e, r) {
      var o = r(18)(function (i) {
        return i[1]
      })
      o.push([
        t.i,
        '/*! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\n/*\nAdd the correct font size in all browsers.\n*/\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\nselect {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\n\nh1,\nh2,\nh3,\np {\n  margin: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-webkit-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;}.static{position:static;}.fixed{position:fixed;}.sticky{position:sticky;}.top-0{top:0px;}.z-10{z-index:10;}.m-4{margin:1rem;}.m-5{margin:1.25rem;}.mx-auto{margin-left:auto;margin-right:auto;}.mx-2{margin-left:0.5rem;margin-right:0.5rem;}.mb-3{margin-bottom:0.75rem;}.ml-2{margin-left:0.5rem;}.mt-5{margin-top:1.25rem;}.mr-5{margin-right:1.25rem;}.mt-4{margin-top:1rem;}.mt-8{margin-top:2rem;}.mb-5{margin-bottom:1.25rem;}.mb-4{margin-bottom:1rem;}.flex{display:-webkit-box;display:-ms-flexbox;display:flex;}.grid{display:grid;}.hidden{display:none;}.h-6{height:1.5rem;}.h-12{height:3rem;}.h-28{height:7rem;}.w-6{width:1.5rem;}.w-40{width:10rem;}.w-52{width:13rem;}.w-full{width:100%;}.max-w-xs{max-width:20rem;}.cursor-pointer{cursor:pointer;}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr));}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;}.items-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.justify-between{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;}.gap-8{gap:2rem;}.gap-4{gap:1rem;}.space-x-6 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.5rem * var(--tw-space-x-reverse));margin-left:calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));}.space-y-2 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.5rem * var(--tw-space-y-reverse));}.rounded-2xl{border-radius:1rem;}.rounded-xl{border-radius:0.75rem;}.rounded-md{border-radius:0.375rem;}.rounded-t-2xl{border-top-left-radius:1rem;border-top-right-radius:1rem;}.rounded-b-2xl{border-bottom-right-radius:1rem;border-bottom-left-radius:1rem;}.border-2{border-width:2px;}.border-red{--tw-border-opacity:1;border-color:rgb(237 79 16 / var(--tw-border-opacity));}.bg-blue{--tw-bg-opacity:1;background-color:rgb(81 186 252 / var(--tw-bg-opacity));}.bg-blue_light{--tw-bg-opacity:1;background-color:rgb(185 226 252 / var(--tw-bg-opacity));}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.bg-grey_light{--tw-bg-opacity:1;background-color:rgb(237 234 235 / var(--tw-bg-opacity));}.bg-red{--tw-bg-opacity:1;background-color:rgb(237 79 16 / var(--tw-bg-opacity));}.p-4{padding:1rem;}.p-2{padding:0.5rem;}.p-3{padding:0.75rem;}.p-5{padding:1.25rem;}.p-10{padding:2.5rem;}.py-16{padding-top:4rem;padding-bottom:4rem;}.px-3{padding-left:0.75rem;padding-right:0.75rem;}.text-center{text-align:center;}.text-3xl{font-size:1.875rem;line-height:2.25rem;}.text-lg{font-size:1.125rem;line-height:1.75rem;}.text-2xl{font-size:1.5rem;line-height:2rem;}.text-base{font-size:1rem;line-height:1.5rem;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-xs{font-size:0.75rem;line-height:1rem;}.text-4xl{font-size:2.25rem;line-height:2.5rem;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.font-medium{font-weight:500;}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.text-red{--tw-text-opacity:1;color:rgb(237 79 16 / var(--tw-text-opacity));}.text-grey_dark{--tw-text-opacity:1;color:rgb(81 81 81 / var(--tw-text-opacity));}.shadow-xl{--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-md{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.blur{--tw-blur:blur(8px);-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.hover\\:opacity-75:hover{opacity:0.75;}@media (min-width: 640px){.sm\\:h-9{height:2.25rem;}.sm\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem;}}@media (min-width: 768px){.md\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}}@media (min-width: 1024px){.lg\\:col-span-2{grid-column:span 2 / span 2;}.lg\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr));}.lg\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr));}.lg\\:p-0{padding:0px;}.lg\\:p-36{padding:9rem;}.lg\\:px-8{padding-left:2rem;padding-right:2rem;}}',
        ""
      ]),
        (o.locals = {}),
        (t.exports = o)
    },
    173: function (t, e, r) {
      "use strict"
      r(113)
    },
    174: function (t, e, r) {
      var o = r(18),
        n = r(175),
        l = r(114),
        d = o(function (i) {
          return i[1]
        }),
        c = n(l)
      d.push([
        t.i,
        ".title[data-v-f893feac]{background:url(" +
          c +
          ") no-repeat;background-position:50% 50%;background-size:165px}.dropdown[data-v-f893feac]{position:absolute;padding:0.75rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));right:0px;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:0.75rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-width:2px;--tw-border-opacity:1;border-color:rgb(237 234 235 / var(--tw-border-opacity))}.button[data-v-f893feac]{width:100%}.button[data-v-f893feac]:hover{--tw-bg-opacity:1;background-color:rgb(237 234 235 / var(--tw-bg-opacity))}.button[data-v-f893feac]{padding:0.5rem;border-radius:0.5rem}",
        ""
      ]),
        (d.locals = {}),
        (t.exports = d)
    },
    176: function (t, e, r) {
      "use strict"
      r(115)
    },
    177: function (t, e, r) {
      var o = r(18)(function (i) {
        return i[1]
      })
      o.push([
        t.i,
        ".link[data-v-6e51293b]:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline;opacity:0.75}footer[data-v-6e51293b]{margin-top:auto}",
        ""
      ]),
        (o.locals = {}),
        (t.exports = o)
    },
    178: function (t, e, r) {
      "use strict"
      r(116)
    },
    179: function (t, e, r) {
      var o = r(18)(function (i) {
        return i[1]
      })
      o.push([t.i, "", ""]), (o.locals = {}), (t.exports = o)
    },
    180: function (t, e, r) {
      "use strict"
      r(117)
    },
    181: function (t, e, r) {
      var o = r(18)(function (i) {
        return i[1]
      })
      o.push([t.i, "", ""]), (o.locals = {}), (t.exports = o)
    },
    182: function (t, e, r) {
      "use strict"
      r(118)
    },
    183: function (t, e, r) {
      var o = r(18)(function (i) {
        return i[1]
      })
      o.push([
        t.i,
        ".box[data-v-4a2b29eb]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:0.75rem}",
        ""
      ]),
        (o.locals = {}),
        (t.exports = o)
    },
    184: function (t, e, r) {
      "use strict"
      r(119)
    },
    185: function (t, e, r) {
      var o = r(18)(function (i) {
        return i[1]
      })
      o.push([
        t.i,
        "body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100vh;margin:0}.input{display:block;width:100%;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:400;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));background-clip:padding-box;border-width:1px;border-style:solid;border-radius:0.25rem;-webkit-transition-property:color, background-color, border-color, fill, stroke, opacity, -webkit-text-decoration-color, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, fill, stroke, opacity, -webkit-text-decoration-color, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin:0px}.input:focus{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));outline:2px solid transparent;outline-offset:2px}.modal{top:0px;right:0px;left:0px;bottom:0px;z-index:50;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.modal-background{background-color:rgb(81 81 81 / 0.8);width:100%;height:100%;z-index:10;position:fixed;top:0px}.modal-wrapper{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));z-index:20;border-radius:1rem;width:24rem}",
        ""
      ]),
        (o.locals = {}),
        (t.exports = o)
    },
    186: function (t, e, r) {
      "use strict"
      r.r(e),
        r.d(e, "state", function () {
          return o
        }),
        r.d(e, "getters", function () {
          return n
        }),
        r.d(e, "mutations", function () {
          return l
        })
      r(26), r(187), r(16)
      var o = function () {
          return {
            products: [
              {
                id: 1,
                title: "Product 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                price: 50,
                ratings: 3,
                reviews: 5,
                isAddedToCart: !1,
                isAddedBtn: !1,
                isFavourite: !1,
                quantity: 1
              },
              {
                id: 2,
                title: "Product 2",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                price: 35,
                ratings: 5,
                reviews: 10,
                isAddedToCart: !1,
                isAddedBtn: !1,
                isFavourite: !1,
                quantity: 1
              },
              {
                id: 3,
                title: "Product 3",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                price: 110,
                ratings: 2,
                reviews: 3,
                isAddedToCart: !1,
                isAddedBtn: !1,
                isFavourite: !1,
                quantity: 1
              },
              {
                id: 4,
                title: "Product 4",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                price: 50,
                ratings: 1,
                reviews: 0,
                isAddedToCart: !1,
                isAddedBtn: !1,
                isFavourite: !1,
                quantity: 1
              },
              {
                id: 5,
                title: "Product 5",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                price: 35,
                ratings: 4,
                reviews: 2,
                isAddedToCart: !1,
                isAddedBtn: !1,
                isFavourite: !1,
                quantity: 1
              },
              {
                id: 6,
                title: "Product 6",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                price: 110,
                ratings: 5,
                reviews: 1,
                isAddedToCart: !1,
                isAddedBtn: !1,
                isFavourite: !1,
                quantity: 1
              },
              {
                id: 7,
                title: "Product 7",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                price: 50,
                ratings: 5,
                reviews: 7,
                isAddedToCart: !1,
                isAddedBtn: !1,
                isFavourite: !1,
                quantity: 1
              },
              {
                id: 8,
                title: "Product 8",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                price: 35,
                ratings: 3,
                reviews: 0,
                isAddedToCart: !1,
                isAddedBtn: !1,
                isFavourite: !1,
                quantity: 1
              },
              {
                id: 9,
                title: "Product 9",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                price: 110,
                ratings: 4,
                reviews: 2,
                isAddedToCart: !1,
                isAddedBtn: !1,
                isFavourite: !1,
                quantity: 1
              }
            ],
            userInfo: { isLoggedIn: !1, isSignedUp: !1, hasSearched: !1, name: "", productTitleSearched: "" },
            systemInfo: { openLoginModal: !1, openSignupModal: !1, openCheckoutModal: !1 }
          }
        },
        n = {
          productsAdded: function (t) {
            return t.products.filter(function (t) {
              return t.isAddedToCart
            })
          },
          productsAddedToFavourite: function (t) {
            return t.products.filter(function (t) {
              return t.isFavourite
            })
          },
          getProductById: function (t) {
            return function (e) {
              return t.products.find(function (t) {
                return t.id == e
              })
            }
          },
          isUserLoggedIn: function (t) {
            return t.userInfo.isLoggedIn
          },
          isUserSignedUp: function (t) {
            return t.userInfo.isSignedUp
          },
          getUserName: function (t) {
            return t.userInfo.name
          },
          isLoginModalOpen: function (t) {
            return t.systemInfo.openLoginModal
          },
          isSignupModalOpen: function (t) {
            return t.systemInfo.openSignupModal
          },
          isCheckoutModalOpen: function (t) {
            return t.systemInfo.openCheckoutModal
          },
          quantity: function (t) {
            return t.products.quantity
          }
        },
        l = {
          addToCart: function (t, e) {
            t.products.forEach(function (t) {
              e === t.id && (t.isAddedToCart = !0)
            })
          },
          setAddedBtn: function (t, data) {
            t.products.forEach(function (t) {
              data.id === t.id && (t.isAddedBtn = data.status)
            })
          },
          removeFromCart: function (t, e) {
            t.products.forEach(function (t) {
              e === t.id && (t.isAddedToCart = !1)
            })
          },
          removeProductsFromFavourite: function (t) {
            t.products.filter(function (t) {
              t.isFavourite = !1
            })
          },
          isUserLoggedIn: function (t, e) {
            t.userInfo.isLoggedIn = e
          },
          isUserSignedUp: function (t, e) {
            t.userInfo.isSignedUp = e
          },
          setHasUserSearched: function (t, e) {
            t.userInfo.hasSearched = e
          },
          setUserName: function (t, e) {
            t.userInfo.name = e
          },
          setProductTitleSearched: function (t, e) {
            t.userInfo.productTitleSearched = e
          },
          showLoginModal: function (t, e) {
            t.systemInfo.openLoginModal = e
          },
          showSignupModal: function (t, e) {
            t.systemInfo.openSignupModal = e
          },
          showCheckoutModal: function (t, e) {
            t.systemInfo.openCheckoutModal = e
          },
          addToFavourite: function (t, e) {
            t.products.forEach(function (t) {
              e === t.id && (t.isFavourite = !0)
            })
          },
          removeFromFavourite: function (t, e) {
            t.products.forEach(function (t) {
              e === t.id && (t.isFavourite = !1)
            })
          },
          quantity: function (t, data) {
            t.products.forEach(function (t) {
              data.id === t.id && (t.quantity = data.quantity)
            })
          },
          SET_USER: function (t, e) {
            t.authUser = e
          }
        }
    }
  },
  [[126, 5, 1, 6]]
])
