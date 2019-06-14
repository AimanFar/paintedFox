<template>
    <Layout>
        <section class="section is-medium hero is-black ">
            <div class="columns is-centered">
                <div class="column is-8 has-text-centered">
                    <h2 class="t t2 has-text-white">
                        We are here to help you grow
                    </h2>
                    <p class="p">
                        Fill up the form below and we will be in touch with you within one business day
                    </p>
                </div>
            </div>
        </section>
        <section class="section is-medium">
            <div class="columns is-centered">
                <div class="column is-5">
                    <div class="box">
                        <!-- <g-image class="image" src="~/assets/img/sales-struggle.svg"/> -->
                        <form name="contact" method="POST" data-netlify="true" action="">
                            <div class="columns is-centered">
                                <div class="column">
                                    <div class="field">
                                        <label class="label">Name:</label>
                                        <div class="control">
                                            <input type="text" class="input" placeholder="Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="field">
                                        <label class="label">Email:</label>
                                        <div class="control">
                                            <input type="email" class="input" placeholder="Email">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Company URL</label>
                                <div class="control">
                                    <input type="url" class="input" placeholder="Company URL">
                                </div>
                            </div>
                            <div class="field">
                                <label for="" class="label">Phone Number or Skype ID</label>
                                <div class="control">
                                    <input type="text" class="input" placeholder="Contact">
                                </div>
                            </div>
                            <div class="field">
                                <label for="" class="label">Tell Us About Your Business</label>
                                <textarea name="about" id="" class="textarea" rows="10"></textarea>
                            </div>
                            <button class="button is-black p10" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>