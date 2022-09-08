<!-- loio80fa2456fdc440c6ab8699589855c32c -->

# Text Pool Cleanup

All configurations that you create under one application node share a common text pool, that is, one set of texts for all configurations belonging to an application node. This is useful if you have configurations that share large parts of their texts, for example, because they are very similar as far as their content is concerned.

When you export a configuration, the corresponding text pool can be exported too, for example, for translation purposes. However, in certain cases, texts that are no longer used may exist in the text pool. For example, if you change a text, both the old text and the new one are retained in the text pool, even if you only correct a typo. When workin in the APF Configuration Modeler, you can only add texts to the text pool, but not change or remove them. Therefore, to keep your text pool as small as possible and save translation costs, we recommend performing a text pool cleanup whenever you want to export a text pool. Otherwise, obsolete texts may end up in the translation process.

On the *Application Overview* screen, choose the *Text Pool Cleanup* icon for the application for which you want to perform the text pool cleanup.

**Related Information**  


[Export](export-7de4975.md "")

[Translation](translation-4510c30.md "")

