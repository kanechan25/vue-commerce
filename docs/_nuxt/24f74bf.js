;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    188: function (t, e, r) {
      var content = r(190)
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals)
      ;(0, r(19).default)("55699728", content, !0, { sourceMap: !1 })
    },
    189: function (t, e, r) {
      "use strict"
      r(188)
    },
    190: function (t, e, r) {
      var o = r(18)(function (i) {
        return i[1]
      })
      o.push([
        t.i,
        ".detail[data-v-8bd4d122]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media (min-width: 1024px){.detail[data-v-8bd4d122]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.detail[data-v-8bd4d122]{margin:1.25rem;--tw-shadow:0 25px 50px -12px rgb(0 0 0 / 0.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.detail .img-wrapper[data-v-8bd4d122]{-webkit-box-flex:1;-ms-flex:1;flex:1}@media (min-width: 1024px){.detail .img-wrapper img[data-v-8bd4d122]{border-radius:0px;border-top-left-radius:1rem;border-bottom-left-radius:1rem}}.detail .text-wrapper[data-v-8bd4d122]{-webkit-box-flex:2;-ms-flex:2;flex:2}",
        ""
      ]),
        (o.locals = {}),
        (t.exports = o)
    },
    191: function (t, e, r) {
      "use strict"
      var o = {
          name: "products",
          props: ["product", "detail"],
          data: function () {
            return {
              addToCartLabel: "Add to cart",
              viewDetailsLabel: "Details",
              removeFromCartLabel: "Remove from cart",
              addToFavouriteLabel: "Add to favourite",
              removeFromFavouriteLabel: "Remove from favourite",
              selected: 1,
              quantityArray: []
            }
          },
          mounted: function () {
            for (var i = 1; i <= 20; i++) this.quantityArray.push(i)
            this.$props.product.quantity > 1 && (this.selected = this.$props.product.quantity)
          },
          computed: {
            isUserLogged: function () {
              return this.$store.getters.isUserLoggedIn
            }
          },
          methods: {
            addToCart: function (t) {
              var data = { id: t, status: !0 }
              this.$store.commit("addToCart", t), this.$store.commit("setAddedBtn", data)
            },
            removeFromCart: function (t) {
              var data = { id: t, status: !1 }
              this.$store.commit("removeFromCart", t), this.$store.commit("setAddedBtn", data)
            },
            saveToFavorite: function (t) {
              this.$store.state.userInfo.isLoggedIn
                ? this.$store.commit("addToFavourite", t)
                : this.$store.commit("showLoginModal", !0)
            },
            removeFromFavourite: function (t) {
              this.$store.commit("removeFromFavourite", t)
            },
            onSelectQuantity: function (t) {
              var data = { id: t, quantity: this.selected }
              this.$store.commit("quantity", data)
            }
          }
        },
        d = (r(189), r(6)),
        component = Object(d.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e
            return r(
              "div",
              { staticClass: "rounded-2xl shadow-xl shadow-slate-300/60", class: [t.detail ? "detail" : ""] },
              [
                r(
                  "div",
                  { staticClass: "img-wrapper rounded-t-2xl" },
                  [
                    r(
                      "nuxt-link",
                      {
                        attrs: {
                          to: {
                            name: "product_detail-id",
                            params: {
                              id: t.product.id,
                              title: t.product.title,
                              price: t.product.price,
                              rating: t.product.ratings,
                              reviews: t.product.reviews,
                              isAddedBtn: t.product.isAddedBtn
                            }
                          }
                        }
                      },
                      [
                        r("img", {
                          staticClass: "rounded-t-2xl",
                          attrs: { src: "https://bulma.io/images/placeholders/1280x960.png", alt: "Placeholder image" }
                        })
                      ]
                    )
                  ],
                  1
                ),
                t._v(" "),
                r("div", { staticClass: "text-wrapper p-4" }, [
                  r("div", { staticClass: "flex items-center justify-between mb-3" }, [
                    r(
                      "div",
                      { staticClass: "media-content" },
                      [
                        r(
                          "nuxt-link",
                          {
                            attrs: {
                              to: {
                                name: "product_detail-id",
                                params: {
                                  id: t.product.id,
                                  title: t.product.title,
                                  price: t.product.price,
                                  rating: t.product.ratings,
                                  reviews: t.product.reviews,
                                  isAddedBtn: t.product.isAddedBtn
                                }
                              }
                            }
                          },
                          [r("span", { class: [t.detail ? "text-3xl" : "text-lg"] }, [t._v(t._s(t.product.title))])]
                        )
                      ],
                      1
                    ),
                    t._v(" "),
                    r(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.product.isFavourite,
                            expression: "product.isFavourite"
                          }
                        ],
                        staticClass: "button text-lg",
                        attrs: { title: t.removeFromFavouriteLabel },
                        on: {
                          click: function (e) {
                            return t.removeFromFavourite(t.product.id)
                          }
                        }
                      },
                      [t._m(0)]
                    ),
                    t._v(" "),
                    r(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !t.product.isFavourite,
                            expression: "!product.isFavourite"
                          }
                        ],
                        staticClass: "button text-lg",
                        attrs: { title: t.addToFavouriteLabel },
                        on: {
                          click: function (e) {
                            return t.saveToFavorite(t.product.id)
                          }
                        }
                      },
                      [t._m(1)]
                    )
                  ]),
                  t._v(" "),
                  r("div", { staticClass: "content is-clearfix" }, [
                    r("p", { class: [t.detail ? "text-2xl" : "text-base"] }, [t._v(t._s(t.product.description))]),
                    t._v(" "),
                    r("div", { staticClass: "flex justify-between" }, [
                      r("div", { staticClass: "flex items-center" }, [
                        1 === t.product.ratings ? r("i", { staticClass: "fa fa-star" }) : t._e(),
                        t._v(" "),
                        2 === t.product.ratings ? r("i", { staticClass: "fa fa-star" }) : t._e(),
                        t._v(" "),
                        2 === t.product.ratings ? r("i", { staticClass: "fa fa-star" }) : t._e(),
                        t._v(" "),
                        3 === t.product.ratings ? r("i", { staticClass: "fa fa-star" }) : t._e(),
                        t._v(" "),
                        3 === t.product.ratings ? r("i", { staticClass: "fa fa-star" }) : t._e(),
                        t._v(" "),
                        3 === t.product.ratings ? r("i", { staticClass: "fa fa-star" }) : t._e(),
                        t._v(" "),
                        4 === t.product.ratings ? r("i", { staticClass: "fa fa-star" }) : t._e(),
                        t._v(" "),
                        4 === t.product.ratings ? r("i", { staticClass: "fa fa-star" }) : t._e(),
                        t._v(" "),
                        4 === t.product.ratings ? r("i", { staticClass: "fa fa-star" }) : t._e(),
                        t._v(" "),
                        4 === t.product.ratings ? r("i", { staticClass: "fa fa-star" }) : t._e(),
                        t._v(" "),
                        5 === t.product.ratings ? r("i", { staticClass: "fa fa-star" }) : t._e(),
                        t._v(" "),
                        5 === t.product.ratings ? r("i", { staticClass: "fa fa-star" }) : t._e(),
                        t._v(" "),
                        5 === t.product.ratings ? r("i", { staticClass: "fa fa-star" }) : t._e(),
                        t._v(" "),
                        5 === t.product.ratings ? r("i", { staticClass: "fa fa-star" }) : t._e(),
                        t._v(" "),
                        5 === t.product.ratings ? r("i", { staticClass: "fa fa-star" }) : t._e(),
                        t._v(" "),
                        r("p", { staticClass: "ml-2 text-lg" }, [
                          t._v(t._s(t.product.reviews > 0 ? t.product.reviews + " Reviews" : "No reviews"))
                        ])
                      ]),
                      t._v(" "),
                      r("p", { staticClass: "text-3xl font-medium" }, [
                        r("strong", [t._v("€ " + t._s(t.product.price))])
                      ])
                    ]),
                    t._v(" "),
                    r("div", { staticClass: "flex justify-between mt-5 items-center" }, [
                      r(
                        "select",
                        {
                          directives: [
                            { name: "model", rawName: "v-model", value: t.selected, expression: "selected" }
                          ],
                          staticClass: "p-2 border-2 rounded-2xl",
                          on: {
                            change: [
                              function (e) {
                                var r = Array.prototype.filter
                                  .call(e.target.options, function (t) {
                                    return t.selected
                                  })
                                  .map(function (t) {
                                    return "_value" in t ? t._value : t.value
                                  })
                                t.selected = e.target.multiple ? r : r[0]
                              },
                              function (e) {
                                return t.onSelectQuantity(t.product.id)
                              }
                            ]
                          }
                        },
                        t._l(t.quantityArray, function (e) {
                          return r("option", { key: e, domProps: { value: e } }, [
                            t._v("\n            " + t._s(e) + "\n          ")
                          ])
                        }),
                        0
                      ),
                      t._v(" "),
                      t.product.isAddedToCart
                        ? t._e()
                        : r(
                            "button",
                            {
                              staticClass: "rounded-xl p-3 bg-blue text-white",
                              on: {
                                click: function (e) {
                                  return t.addToCart(t.product.id)
                                }
                              }
                            },
                            [t._v(t._s(t.addToCartLabel))]
                          ),
                      t._v(" "),
                      t.product.isAddedToCart
                        ? r(
                            "button",
                            {
                              staticClass: "rounded-xl p-3",
                              on: {
                                click: function (e) {
                                  return t.removeFromCart(t.product.id, !1)
                                }
                              }
                            },
                            [t._v(t._s(t.removeFromCartLabel))]
                          )
                        : t._e()
                    ])
                  ])
                ])
              ]
            )
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t
              return e("span", { staticClass: "icon" }, [e("i", { staticClass: "fas fa-heart" })])
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t
              return e("span", { staticClass: "icon" }, [e("i", { staticClass: "far fa-heart" })])
            }
          ],
          !1,
          null,
          "8bd4d122",
          null
        )
      e.a = component.exports
    },
    192: function (t, e, r) {
      "use strict"
      r.d(e, "a", function () {
        return o
      })
      r(26)
      function o(t, e) {
        var r = e.trim().toLowerCase()
        return r.length
          ? t.filter(function (t) {
              return t.title.toLowerCase().indexOf(r) > -1
            })
          : t
      }
    },
    194: function (t, e, r) {
      "use strict"
      r.r(e)
      var o = r(191),
        d = r(192),
        n = {
          name: "user-wishlist",
          data: function () {
            return { pageTitle: "Your Wishlist", noProductLabel: "Your wishlist is empty" }
          },
          components: { VmProductsList: o.a },
          computed: {
            productsInWishlist: function () {
              return this.$store.state.userInfo.hasSearched
                ? this.getProductByTitle()
                : this.$store.getters.productsAddedToFavourite
            }
          },
          methods: {
            getProductByTitle: function () {
              var t = this.$store,
                e = t.getters.productsAddedToFavourite,
                r = t.state.userInfo.productTitleSearched
              return (this.productsFiltered = Object(d.a)(e, r))
            }
          }
        },
        c = r(6),
        component = Object(c.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e
            return r("div", { staticClass: "p-5" }, [
              r("h3", { staticClass: "text-2xl mb-4" }, [t._v(t._s(t.pageTitle))]),
              t._v(" "),
              r(
                "div",
                { staticClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" },
                [
                  t._l(t.productsInWishlist, function (t) {
                    return r("div", { key: t.id }, [r("VmProductsList", { attrs: { product: t } })], 1)
                  }),
                  t._v(" "),
                  0 === t.productsInWishlist.length
                    ? r("div", { staticClass: "section" }, [r("p", [t._v(t._s(t.noProductLabel))])])
                    : t._e()
                ],
                2
              )
            ])
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = component.exports
    }
  }
])
