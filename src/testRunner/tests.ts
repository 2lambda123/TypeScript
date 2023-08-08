import "./unittests/asserts";
import "./unittests/base64";
import "./unittests/builder";
import "./unittests/canWatch";
import "./unittests/comments";
import "./unittests/compilerCore";
import "./unittests/convertToBase64";
import "./unittests/customTransforms";
import "./unittests/factory";
import "./unittests/incrementalParser";
import "./unittests/jsDocParsing";
import "./unittests/jsonParserRecovery";
import "./unittests/moduleResolution";
import "./unittests/parsePseudoBigInt";
import "./unittests/paths";
import "./unittests/printer";
import "./unittests/programApi";
import "./unittests/publicApi";
import "./unittests/reuseProgramStructure";
import "./unittests/semver";
import "./unittests/transform";
import "./unittests/typeParameterIsPossiblyReferenced";
import "./unittests/config/commandLineParsing";
import "./unittests/config/configurationExtension";
import "./unittests/config/convertCompilerOptionsFromJson";
import "./unittests/config/convertTypeAcquisitionFromJson";
import "./unittests/config/initializeTSConfig";
import "./unittests/config/matchFiles";
import "./unittests/config/showConfig";
import "./unittests/config/tsconfigParsing";
import "./unittests/config/tsconfigParsingWatchOptions";
import "./unittests/evaluation/arraySpread";
import "./unittests/evaluation/asyncArrow";
import "./unittests/evaluation/asyncGenerator";
import "./unittests/evaluation/autoAccessors";
import "./unittests/evaluation/awaiter";
import "./unittests/evaluation/constEnum";
import "./unittests/evaluation/destructuring";
import "./unittests/evaluation/externalModules";
import "./unittests/evaluation/esDecorators";
import "./unittests/evaluation/esDecoratorsMetadata";
import "./unittests/evaluation/forAwaitOf";
import "./unittests/evaluation/forOf";
import "./unittests/evaluation/generator";
import "./unittests/evaluation/optionalCall";
import "./unittests/evaluation/objectRest";
import "./unittests/evaluation/superInStaticInitializer";
import "./unittests/evaluation/templateLiteral";
import "./unittests/evaluation/updateExpressionInModule";
import "./unittests/evaluation/usingDeclarations";
import "./unittests/evaluation/awaitUsingDeclarations";
import "./unittests/services/cancellableLanguageServiceOperations";
import "./unittests/services/colorization";
import "./unittests/services/convertToAsyncFunction";
import "./unittests/services/documentRegistry";
import "./unittests/services/extract/constants";
import "./unittests/services/extract/functions";
import "./unittests/services/extract/symbolWalker";
import "./unittests/services/extract/ranges";
import "./unittests/services/hostNewLineSupport";
import "./unittests/services/languageService";
import "./unittests/services/organizeImports";
import "./unittests/services/patternMatcher";
import "./unittests/services/preProcessFile";
import "./unittests/services/textChanges";
import "./unittests/services/transpile";
import "./unittests/services/utilities";
import "./unittests/tsbuild/amdModulesWithOut";
import "./unittests/tsbuild/clean";
import "./unittests/tsbuild/commandLine";
import "./unittests/tsbuild/configFileErrors";
import "./unittests/tsbuild/configFileExtends";
import "./unittests/tsbuild/containerOnlyReferenced";
import "./unittests/tsbuild/declarationEmit";
import "./unittests/tsbuild/demo";
import "./unittests/tsbuild/emitDeclarationOnly";
import "./unittests/tsbuild/emptyFiles";
import "./unittests/tsbuild/exitCodeOnBogusFile";
import "./unittests/tsbuild/extends";
import "./unittests/tsbuild/fileDelete";
import "./unittests/tsbuild/graphOrdering";
import "./unittests/tsbuild/inferredTypeFromTransitiveModule";
import "./unittests/tsbuild/javascriptProjectEmit";
import "./unittests/tsbuild/lateBoundSymbol";
import "./unittests/tsbuild/libraryResolution";
import "./unittests/tsbuild/moduleResolution";
import "./unittests/tsbuild/moduleSpecifiers";
import "./unittests/tsbuild/noEmit";
import "./unittests/tsbuild/noEmitOnError";
import "./unittests/tsbuild/outFile";
import "./unittests/tsbuild/outputPaths";
import "./unittests/tsbuild/publicApi";
import "./unittests/tsbuild/referencesWithRootDirInParent";
import "./unittests/tsbuild/resolveJsonModule";
import "./unittests/tsbuild/roots";
import "./unittests/tsbuild/sample";
import "./unittests/tsbuild/transitiveReferences";
import "./unittests/tsbuild/typeReferenceDirectives";
import "./unittests/tsbuildWatch/configFileErrors";
import "./unittests/tsbuildWatch/demo";
import "./unittests/tsbuildWatch/libraryResolution";
import "./unittests/tsbuildWatch/moduleResolution";
import "./unittests/tsbuildWatch/noEmit";
import "./unittests/tsbuildWatch/noEmitOnError";
import "./unittests/tsbuildWatch/programUpdates";
import "./unittests/tsbuildWatch/projectsBuilding";
import "./unittests/tsbuildWatch/publicApi";
import "./unittests/tsbuildWatch/reexport";
import "./unittests/tsbuildWatch/watchEnvironment";
import "./unittests/tsc/cancellationToken";
import "./unittests/tsc/composite";
import "./unittests/tsc/declarationEmit";
import "./unittests/tsc/extends";
import "./unittests/tsc/forceConsistentCasingInFileNames";
import "./unittests/tsc/incremental";
import "./unittests/tsc/libraryResolution";
import "./unittests/tsc/listFilesOnly";
import "./unittests/tsc/moduleResolution";
import "./unittests/tsc/projectReferences";
import "./unittests/tsc/projectReferencesConfig";
import "./unittests/tsc/redirect";
import "./unittests/tsc/runWithoutArgs";
import "./unittests/tscWatch/consoleClearing";
import "./unittests/tscWatch/emit";
import "./unittests/tscWatch/nodeNextWatch";
import "./unittests/tscWatch/emitAndErrorUpdates";
import "./unittests/tscWatch/extends";
import "./unittests/tscWatch/forceConsistentCasingInFileNames";
import "./unittests/tscWatch/incremental";
import "./unittests/tscWatch/libraryResolution";
import "./unittests/tscWatch/moduleResolution";
import "./unittests/tscWatch/programUpdates";
import "./unittests/tscWatch/projectsWithReferences";
import "./unittests/tscWatch/resolutionCache";
import "./unittests/tscWatch/resolveJsonModuleWithIncremental";
import "./unittests/tscWatch/sourceOfProjectReferenceRedirect";
import "./unittests/tscWatch/watchApi";
import "./unittests/tscWatch/watchEnvironment";
import "./unittests/tsserver/applyChangesToOpenFiles";
import "./unittests/tsserver/autoImportProvider";
import "./unittests/tsserver/auxiliaryProject";
import "./unittests/tsserver/cachingFileSystemInformation";
import "./unittests/tsserver/cancellationToken";
import "./unittests/tsserver/compileOnSave";
import "./unittests/tsserver/completions";
import "./unittests/tsserver/completionsIncomplete";
import "./unittests/tsserver/configFileSearch";
import "./unittests/tsserver/configuredProjects";
import "./unittests/tsserver/declarationFileMaps";
import "./unittests/tsserver/documentRegistry";
import "./unittests/tsserver/duplicatePackages";
import "./unittests/tsserver/dynamicFiles";
import "./unittests/tsserver/events/largeFileReferenced";
import "./unittests/tsserver/events/projectLanguageServiceState";
import "./unittests/tsserver/events/projectLoading";
import "./unittests/tsserver/events/projectUpdatedInBackground";
import "./unittests/tsserver/exportMapCache";
import "./unittests/tsserver/extends";
import "./unittests/tsserver/externalProjects";
import "./unittests/tsserver/findAllReferences";
import "./unittests/tsserver/forceConsistentCasingInFileNames";
import "./unittests/tsserver/formatSettings";
import "./unittests/tsserver/getApplicableRefactors";
import "./unittests/tsserver/getEditsForFileRename";
import "./unittests/tsserver/getExportReferences";
import "./unittests/tsserver/getFileReferences";
import "./unittests/tsserver/goToDefinition";
import "./unittests/tsserver/importHelpers";
import "./unittests/tsserver/inlayHints";
import "./unittests/tsserver/inferredProjects";
import "./unittests/tsserver/jsdocTag";
import "./unittests/tsserver/languageService";
import "./unittests/tsserver/libraryResolution";
import "./unittests/tsserver/maxNodeModuleJsDepth";
import "./unittests/tsserver/metadataInResponse";
import "./unittests/tsserver/moduleResolution";
import "./unittests/tsserver/moduleSpecifierCache";
import "./unittests/tsserver/navTo";
import "./unittests/tsserver/occurences";
import "./unittests/tsserver/openFile";
import "./unittests/tsserver/packageJsonInfo";
import "./unittests/tsserver/partialSemanticServer";
import "./unittests/tsserver/plugins";
import "./unittests/tsserver/pluginsAsync";
import "./unittests/tsserver/projectErrors";
import "./unittests/tsserver/projectReferenceCompileOnSave";
import "./unittests/tsserver/projectReferenceErrors";
import "./unittests/tsserver/projectReferences";
import "./unittests/tsserver/projectReferencesSourcemap";
import "./unittests/tsserver/projects";
import "./unittests/tsserver/projectsWithReferences";
import "./unittests/tsserver/refactors";
import "./unittests/tsserver/reload";
import "./unittests/tsserver/reloadProjects";
import "./unittests/tsserver/rename";
import "./unittests/tsserver/resolutionCache";
import "./unittests/tsserver/session";
import "./unittests/tsserver/skipLibCheck";
import "./unittests/tsserver/smartSelection";
import "./unittests/tsserver/symlinkCache";
import "./unittests/tsserver/symLinks";
import "./unittests/tsserver/syntacticServer";
import "./unittests/tsserver/syntaxOperations";
import "./unittests/tsserver/textStorage";
import "./unittests/tsserver/telemetry";
import "./unittests/tsserver/typeAquisition";
import "./unittests/tsserver/typeOnlyImportChains";
import "./unittests/tsserver/typeReferenceDirectives";
import "./unittests/tsserver/typingsInstaller";
import "./unittests/tsserver/versionCache";
import "./unittests/tsserver/watchEnvironment";
import "./unittests/debugDeprecation";
import "./unittests/tsserver/inconsistentErrorInEditor";
import "./unittests/tsserver/getMoveToRefactoringFileSuggestions";
import "./unittests/skipNonSemanticJSDocParsing";
